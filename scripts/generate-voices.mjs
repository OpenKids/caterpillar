import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const appJsPath = path.join(rootDir, 'app.js');
const outputDir = path.join(rootDir, 'assets', 'voices');
const endpoint = 'https://api.openai.com/v1/audio/speech';
const apiKey = process.env.OPENAI_API_KEY;

const model = process.env.OPENAI_TTS_MODEL || 'gpt-4o-mini-tts';
const englishVoice = process.env.OPENAI_TTS_EN_VOICE || 'marin';
const chineseVoice = process.env.OPENAI_TTS_CN_VOICE || 'coral';
const responseFormat = 'mp3';

if (!apiKey) {
  console.error('Missing OPENAI_API_KEY. Set it before running this script.');
  process.exit(1);
}

function getCleanOptionText(option) {
  const optionText = typeof option === 'string' ? option : option.text;
  return optionText.replace(/^[A-C]\.\s*/i, '');
}

function getQuestionSpeechText(questions, index, langCode) {
  const q = questions[index];
  const isEn = langCode === 'en';
  const langData = isEn ? q.en : q.cn;

  if (isEn) {
    return `Question ${index + 1}: ${langData.question.replace(/^\d+\.\s*/, '')}. ` +
      `Option A: ${getCleanOptionText(langData.options[0])}. ` +
      `Option B: ${getCleanOptionText(langData.options[1])}. ` +
      `Option C: ${getCleanOptionText(langData.options[2])}.`;
  }

  return `第 ${index + 1} 题。 ${langData.question.replace(/^\d+\.\s*/, '')}。 ` +
    `选项 A，${getCleanOptionText(langData.options[0])}。 ` +
    `选项 B，${getCleanOptionText(langData.options[1])}。 ` +
    `选项 C，${getCleanOptionText(langData.options[2])}。`;
}

async function loadQuestions() {
  const appSource = await fs.readFile(appJsPath, 'utf8');
  const quizStart = appSource.indexOf('const QUIZ_QUESTIONS = [');
  const quizEnd = appSource.indexOf('function getCleanOptionText', quizStart);

  if (quizStart === -1 || quizEnd === -1) {
    throw new Error('Could not find QUIZ_QUESTIONS in app.js.');
  }

  const quizOnlySource = `${appSource.slice(quizStart, quizEnd)}
globalThis.QUIZ_QUESTIONS = QUIZ_QUESTIONS;`;
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(quizOnlySource, sandbox);
  return sandbox.QUIZ_QUESTIONS;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function generateSpeech({ input, voice, instructions, outputPath }) {
  if (await fileExists(outputPath)) {
    console.log(`skip ${path.relative(rootDir, outputPath)}`);
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      voice,
      input,
      instructions,
      response_format: responseFormat
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`OpenAI TTS failed (${response.status}): ${body}`);
  }

  const audioBuffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outputPath, audioBuffer);
  console.log(`wrote ${path.relative(rootDir, outputPath)}`);
}

async function main() {
  const questions = await loadQuestions();
  const languageConfigs = {
    cn: {
      voice: chineseVoice,
      instructions: 'Speak Mandarin Chinese with a warm, playful kindergarten-teacher voice. Keep it clear, bright, gentle, and encouraging for young children.'
    },
    en: {
      voice: englishVoice,
      instructions: 'Speak English with a warm, playful kindergarten-teacher voice. Keep it clear, bright, gentle, and encouraging for young children.'
    }
  };

  for (const langCode of ['cn', 'en']) {
    await fs.mkdir(path.join(outputDir, langCode), { recursive: true });
  }

  for (const [index, question] of questions.entries()) {
    for (const langCode of ['cn', 'en']) {
      const langData = question[langCode];
      const config = languageConfigs[langCode];
      const langDir = path.join(outputDir, langCode);

      await generateSpeech({
        input: getQuestionSpeechText(questions, index, langCode),
        voice: config.voice,
        instructions: config.instructions,
        outputPath: path.join(langDir, `question-${index + 1}.mp3`)
      });

      await generateSpeech({
        input: langData.correctFeedback,
        voice: config.voice,
        instructions: `${config.instructions} Sound delighted and celebratory.`,
        outputPath: path.join(langDir, `q${index + 1}-correct.mp3`)
      });

      await generateSpeech({
        input: langData.incorrectFeedback,
        voice: config.voice,
        instructions: `${config.instructions} Sound gentle and reassuring.`,
        outputPath: path.join(langDir, `q${index + 1}-incorrect.mp3`)
      });
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
