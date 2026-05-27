/**
 * Caterpillar / Silkworm Life Cycle Educational Quiz
 * Designed for Kindergarten Kids (Bilingual: Chinese & English)
 */

// ==========================================================================
// QUIZ DATA DATASET
// ==========================================================================
const QUIZ_QUESTIONS = [
  {
    // Q1
    cn: {
      question: "1. 蚕宝宝最喜欢吃的食物是？",
      options: [
        { text: "A. 青菜叶", image: "assets/options/green-vegetable-leaf.png", alt: "一片绿色蔬菜叶" },
        { text: "B. 桑叶", image: "assets/options/mulberry-leaves.png", alt: "几片绿色桑叶" },
        { text: "C. 白菜叶", image: "assets/options/cabbage-leaf.png", alt: "一片白菜叶" }
      ],
      correctFeedback: "真棒！蚕宝宝最喜欢吃绿油油的桑叶啦！🌿",
      incorrectFeedback: "哎呀，不对哦。其实蚕宝宝最爱吃的是桑树上的叶子。"
    },
    en: {
      question: "1. What is the silkworm's favorite food?",
      options: [
        { text: "A. Green vegetables", image: "assets/options/green-vegetable-leaf.png", alt: "A green vegetable leaf" },
        { text: "B. Mulberry leaves", image: "assets/options/mulberry-leaves.png", alt: "Several green mulberry leaves" },
        { text: "C. Cabbage leaves", image: "assets/options/cabbage-leaf.png", alt: "A cabbage leaf" }
      ],
      correctFeedback: "Awesome! Silkworms love eating yummy green mulberry leaves! 🌿",
      incorrectFeedback: "Oops, not quite. Silkworms actually love leaves from the mulberry tree."
    },
    correctAnswer: 1, // B
    stageIndex: 0, // Egg / Start stage
    illustration: `<img src="assets/mulberry_leaf_caterpillar.png" alt="A silkworm caterpillar eating a green mulberry leaf">`
  },
  {
    // Q2
    cn: {
      question: "2. 蚕宝宝最后会变成什么？",
      options: [
        { text: "A. 蜜蜂", image: "assets/options/bee.png", alt: "一只蜜蜂" },
        { text: "B. 蝴蝶", image: "assets/options/butterfly.png", alt: "一只蝴蝶" },
        { text: "C. 蚕蛾", image: "assets/options/silk-moth.png", alt: "一只白色蚕蛾" }
      ],
      correctFeedback: "太聪明啦！蚕宝宝吐丝结茧后，最终会变成白白的蚕蛾！🦋",
      incorrectFeedback: "不对哟。虽然蝴蝶和蜜蜂也很漂亮，但蚕宝宝会变成可爱的蚕蛾。"
    },
    en: {
      question: "2. What will the silkworm turn into in the end?",
      options: [
        { text: "A. Bee", image: "assets/options/bee.png", alt: "A bee" },
        { text: "B. Butterfly", image: "assets/options/butterfly.png", alt: "A butterfly" },
        { text: "C. Silk moth", image: "assets/options/silk-moth.png", alt: "A white silk moth" }
      ],
      correctFeedback: "Super smart! After spinning cocoons, silkworms transform into white silk moths! 🦋",
      incorrectFeedback: "Not quite. Although bees and butterflies are pretty, silkworms turn into silk moths."
    },
    correctAnswer: 2, // C
    stageIndex: 0,
    illustration: `<img src="assets/white_silk_moth.png" alt="A fluffy white silk moth sitting on a leaf">`
  },
  {
    // Q3
    cn: {
      question: "3. 可以喂蚕宝宝带水的桑叶吗？",
      options: ["A. 可以", "B. 不可以", "C. 偶尔可以"],
      correctFeedback: "答对啦！湿漉漉的桑叶会让蚕宝宝拉肚子生病，喂食前一定要擦干哦！💧❌",
      incorrectFeedback: "不可以哟。蚕宝宝吃了带水分的桑叶容易生病，一定要喂干燥的桑叶。"
    },
    en: {
      question: "3. Can you feed silkworms wet mulberry leaves?",
      options: ["A. Yes, you can", "B. No, you cannot", "C. Occasionally"],
      correctFeedback: "Correct! Wet leaves will make silkworms sick with tummy aches. Dry them first! 💧❌",
      incorrectFeedback: "No, we cannot. Wet leaves cause silkworms to get sick. We must feed them dry ones."
    },
    correctAnswer: 1, // B
    stageIndex: 1, // Baby Silkworm stage
    illustration: `<img src="assets/wet_mulberry_leaves.png" alt="Green mulberry leaves with water droplets">`
  },
  {
    // Q4
    cn: {
      question: "4. 蚕生命开始的样子是？",
      options: [
        { text: "A. 蚕卵", image: "assets/options/silkworm-eggs.png", alt: "叶子上的蚕卵" },
        { text: "B. 小蚕", image: "assets/options/baby-silkworm.png", alt: "叶子上的小蚕" },
        { text: "C. 蚕蛹", image: "assets/options/silkworm-pupa.png", alt: "蚕蛹和茧" }
      ],
      correctFeedback: "完全正确！蚕的一生是从像小米粒一样的蚕卵开始的！🥚",
      incorrectFeedback: "不对哦。蚕宝宝不是一生下来就是毛毛虫或蛹，它是从卵里孵出来的。"
    },
    en: {
      question: "4. What does a silkworm's life start as?",
      options: [
        { text: "A. Silkworm egg", image: "assets/options/silkworm-eggs.png", alt: "Silkworm eggs on a leaf" },
        { text: "B. Baby silkworm", image: "assets/options/baby-silkworm.png", alt: "A baby silkworm on a leaf" },
        { text: "C. Silkworm pupa", image: "assets/options/silkworm-pupa.png", alt: "A silkworm pupa and cocoon" }
      ],
      correctFeedback: "Spot on! A silkworm's life begins as a tiny egg, looking like a little grain of millet! 🥚",
      incorrectFeedback: "Not quite. Silkworms aren't born as caterpillars or pupae; they hatch from eggs."
    },
    correctAnswer: 0, // A
    stageIndex: 1,
    illustration: `<img src="assets/silkworm_eggs.png" alt="Silkworm eggs on a leaf">`
  },
  {
    // Q5
    cn: {
      question: "5. 蚕宝宝蜕皮是因为？",
      options: ["A. 身体长大了，衣服变小了", "B. 觉得旧衣服不好看", "C. 想变颜色"],
      correctFeedback: "哈哈太对啦！蚕宝宝的皮不会跟着长大，所以它要换件宽宽的“新衣服”！👕✨",
      incorrectFeedback: "不是因为好看或想变色哦。是因为它的身体长得太快，旧皮太紧穿不下啦。"
    },
    en: {
      question: "5. Why do silkworms shed their skin?",
      options: ["A. Grown bigger, clothes got too small", "B. Felt the old clothes didn't look good", "C. Wanted to change colors"],
      correctFeedback: "Haha, spot on! A silkworm's skin cannot stretch, so it has to swap for a larger new coat! 👕✨",
      incorrectFeedback: "It's not about fashion or colors! Their bodies grow so fast that the old skin gets too tight to fit."
    },
    correctAnswer: 0, // A
    stageIndex: 2, // Big Silkworm stage
    illustration: `<img src="assets/silkworm_molting.png" alt="A silkworm shedding its skin">`
  },
  {
    // Q6
    cn: {
      question: "6. 蚕宝宝一共要蜕几次皮？",
      options: ["A. 2次", "B. 4次", "C. 10次"],
      correctFeedback: "你太棒了！蚕宝宝在吃桑叶长大的过程中，一共要蜕皮4次哦！4️⃣",
      incorrectFeedback: "不完全对。2次不够，10次又太多啦。它的蜕皮次数是4次。"
    },
    en: {
      question: "6. How many times do silkworms shed their skin?",
      options: ["A. 2 times", "B. 4 times", "C. 10 times"],
      correctFeedback: "Splendid! While eating and growing, a silkworm sheds its skin exactly 4 times! 4️⃣",
      incorrectFeedback: "Not quite. 2 is too few, 10 is too many. The correct answer is 4 times."
    },
    correctAnswer: 1, // B
    stageIndex: 2,
    illustration: `<img src="assets/growing_silkworm.png" alt="A silkworm caterpillar on a branch">`
  },
  {
    // Q7
    cn: {
      question: "7. 蚕蛾会不会飞？",
      options: ["A. 飞得很高", "B. 只会扑扇翅膀，不会远飞", "C. 完全不会动"],
      correctFeedback: "答对啦！蚕蛾有翅膀，但已经退化了，只会扑扇翅膀在地上爬，不能飞高飞远。🦋👣",
      incorrectFeedback: "不对呀。蚕蛾虽然会动，也扑扇着翅膀，但它们飞不高也飞不远哦。"
    },
    en: {
      question: "7. Can silk moths fly?",
      options: ["A. Yes, they fly very high", "B. Only flutter wings, cannot fly far", "C. Cannot move at all"],
      correctFeedback: "Correct! Silk moths have wings, but they are weak. They only flutter and crawl around! 🦋👣",
      incorrectFeedback: "Oops. Although they flutter their wings and crawl actively, they cannot fly far or high."
    },
    correctAnswer: 1, // B
    stageIndex: 3, // Cocoon stage
    illustration: `<img src="assets/fluttering_silk_moth.png" alt="A white silk moth fluttering wings">`
  },
  {
    // Q8
    cn: {
      question: "8. 蚕宝宝身上的小黑点有什么用？",
      options: ["A. 用来好看装饰", "B. 用来呼吸空气", "C. 用来拉便便"],
      correctFeedback: "你真是天才！这些小黑点叫“气门”，是蚕宝宝用来大口大口呼吸空气的！👃💨",
      incorrectFeedback: "不是装饰品，也不是用来排便的哦。它是蚕宝宝呼吸的通道，像我们的小鼻子。"
    },
    en: {
      question: "8. What are the tiny black dots on a silkworm's body used for?",
      options: ["A. For decoration and looking pretty", "B. For breathing air", "C. For pooping"],
      correctFeedback: "You are a genius! Those little black dots are called 'spiracles', and they are used to breathe air! 👃💨",
      incorrectFeedback: "No, they aren't decorations or for pooping! They are breathing holes, just like our little noses."
    },
    correctAnswer: 1, // B
    stageIndex: 4, // Silk moth / end stage
    illustration: `<img src="assets/silkworm_spiracles.png" alt="Close-up of a caterpillar body showing spiracles">`
  }
];

function getOptionText(option) {
  return typeof option === 'string' ? option : option.text;
}

function getCleanOptionText(option) {
  return getOptionText(option).replace(/^[A-C]\.\s*/i, '');
}

function getOptionImageMarkup(option) {
  if (typeof option === 'string' || !option.image) return '';

  return `
      <span class="option-image-wrap" aria-hidden="true">
        <img class="option-image" src="${option.image}" alt="">
      </span>
    `;
}

// ==========================================================================
// WEB AUDIO API SOUND EFFECTS GENERATOR
// ==========================================================================
class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      // Create audio context on user interaction
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // Play a standard click sound
  playClick() {
    if (this.isMuted) return;
    this.init();
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  // Play a positive ding arpeggio sound
  playCorrect() {
    if (this.isMuted) return;
    this.init();

    const playTone = (freq, delay, duration) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + delay + duration);
      
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    };

    // Upward cheerful arpeggio (C5 -> E5 -> G5 -> C6)
    playTone(523.25, 0.0, 0.2); // C5
    playTone(659.25, 0.08, 0.2); // E5
    playTone(783.99, 0.16, 0.2); // G5
    playTone(1046.50, 0.24, 0.3); // C6
  }

  // Play a low boing sound
  playIncorrect() {
    if (this.isMuted) return;
    this.init();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.35);
    
    // Lowpass filter to make it softer and warmer (less grating for children)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);
    
    osc.disconnect(gain);
    osc.connect(filter);
    filter.connect(gain);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }

  // Play success fanfare
  playSuccess() {
    if (this.isMuted) return;
    this.init();

    const playTone = (freq, delay, duration, volume = 0.1) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
      gain.gain.setValueAtTime(volume, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + delay + duration);
      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration);
    };

    // Ascending scale melody
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C4 E4 G4 C5 E5 G5 C6
    notes.forEach((freq, idx) => {
      playTone(freq, idx * 0.12, 0.4, 0.08);
    });

    // Harmonizing note at the end
    playTone(1318.51, 0.84, 0.6, 0.08); // E6
  }
}

const sounds = new SoundSynthesizer();

// ==========================================================================
// LOCAL AI VOICE AUDIO + WEB SPEECH FALLBACK CONTROLLER FOR KIDS
// ==========================================================================
const LOCAL_VOICE_ENABLED = true;
const ANSWER_FEEDBACK_AUDIO = {
  correct: "assets/hooray.mp3",
  incorrect: "assets/wrong.mp3"
};

function getQuestionSpeechText(index, langCode) {
  const q = QUIZ_QUESTIONS[index];
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

function getQuestionAudioPath(index, langCode) {
  const extension = langCode === 'cn' ? 'wav' : 'mp3';
  return `assets/voices/${langCode}/question-${index + 1}.${extension}`;
}

function getFeedbackAudioPath(index, langCode, isCorrect) {
  return `assets/voices/${langCode}/q${index + 1}-${isCorrect ? 'correct' : 'incorrect'}.mp3`;
}

const speech = {
  utterance: null,
  voices: [],
  audio: new Audio(),
  currentFallback: null,

  loadVoices() {
    if (!('speechSynthesis' in window)) return;
    this.voices = window.speechSynthesis.getVoices();
  },

  getPreferredVoice(langCode) {
    if (!('speechSynthesis' in window)) return null;
    if (!this.voices.length) this.loadVoices();
    const langPrefix = langCode === 'en' ? 'en' : 'zh';
    const matchingVoices = this.voices.filter((voice) => voice.lang.toLowerCase().startsWith(langPrefix));
    const naturalNameHints = ['premium', 'enhanced', 'neural', 'samantha', 'ting-ting', 'mei-jia', 'sin-ji', 'google'];

    return matchingVoices.find((voice) =>
      naturalNameHints.some((hint) => voice.name.toLowerCase().includes(hint))
    ) || matchingVoices[0] || null;
  },

  playLocalAudio(src, fallbackText, langCode, callbackStart, callbackEnd) {
    if (sounds.isMuted) {
      this.stop();
      return;
    }

    this.stop();

    if (!LOCAL_VOICE_ENABLED || !src) {
      this.speakWithBrowserVoice(fallbackText, langCode, callbackStart, callbackEnd);
      return;
    }

    let usedFallback = false;
    this.currentFallback = () => {
      if (usedFallback) return;
      usedFallback = true;
      this.speakWithBrowserVoice(fallbackText, langCode, callbackStart, callbackEnd);
    };

    this.audio = new Audio(src);
    this.audio.preload = 'auto';
    this.audio.onplay = () => {
      if (callbackStart) callbackStart();
    };
    this.audio.onended = () => {
      if (callbackEnd) callbackEnd();
    };
    this.audio.onerror = this.currentFallback;

    const playPromise = this.audio.play();
    if (playPromise) {
      playPromise.catch(this.currentFallback);
    }
  },

  speakWithBrowserVoice(text, langCode, callbackStart, callbackEnd) {
    if (!('speechSynthesis' in window) || !text) {
      if (callbackEnd) callbackEnd();
      return;
    }
    
    window.speechSynthesis.cancel();
    
    this.utterance = new SpeechSynthesisUtterance(text);
    
    if (langCode === 'en') {
      this.utterance.lang = 'en-US';
      this.utterance.rate = 0.9;
    } else {
      this.utterance.lang = 'zh-CN';
      this.utterance.rate = 0.88;
    }
    this.utterance.voice = this.getPreferredVoice(langCode);
    this.utterance.pitch = 1.03;
    this.utterance.volume = 0.96;
    
    if (callbackStart) this.utterance.onstart = callbackStart;
    if (callbackEnd) {
      this.utterance.onend = callbackEnd;
      this.utterance.onerror = callbackEnd;
    }
    
    window.speechSynthesis.speak(this.utterance);
  },

  speak(text, langCode, callbackStart, callbackEnd) {
    this.speakWithBrowserVoice(text, langCode, callbackStart, callbackEnd);
  },

  stop() {
    this.currentFallback = null;
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute('src');
      this.audio.load();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
};

const answerFeedbackAudio = {
  audio: new Audio(),

  play(isCorrect, onDone) {
    let hasFinished = false;
    const finish = () => {
      if (hasFinished) return;
      hasFinished = true;
      if (onDone) onDone();
    };

    if (sounds.isMuted) {
      finish();
      return;
    }

    this.stop();
    this.audio = new Audio(isCorrect ? ANSWER_FEEDBACK_AUDIO.correct : ANSWER_FEEDBACK_AUDIO.incorrect);
    this.audio.preload = 'auto';
    this.audio.onended = finish;
    this.audio.onerror = finish;

    const playPromise = this.audio.play();
    if (playPromise) {
      playPromise.catch(finish);
    }
  },

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute('src');
      this.audio.load();
    }
  }
};

function speakCurrentQuestion() {
  const index = state.currentQuestionIndex;
  const speakText = getQuestionSpeechText(index, state.currentLang);
  
  speech.playLocalAudio(
    getQuestionAudioPath(index, state.currentLang),
    speakText,
    state.currentLang,
    () => {
      if (DOM.btnSpeak) DOM.btnSpeak.classList.add('speaking');
    },
    () => {
      if (DOM.btnSpeak) DOM.btnSpeak.classList.remove('speaking');
    }
  );
}

// ==========================================================================
// APP STATE CONTROLLER
// ==========================================================================
const state = {
  currentLang: 'cn', // 'cn' or 'en'
  currentScreen: 'welcome', // 'welcome', 'quiz', 'results'
  currentQuestionIndex: 0,
  score: 0,
  hasAnsweredCurrent: false
};

// DOM References
const DOM = {
  btnLang: document.getElementById('btn-lang'),
  btnSound: document.getElementById('btn-sound'),
  btnStart: document.getElementById('btn-start'),
  btnNext: document.getElementById('btn-next'),
  btnRestart: document.getElementById('btn-restart'),
  btnSpeak: document.getElementById('btn-speak'),
  
  screenWelcome: document.getElementById('screen-welcome'),
  screenQuiz: document.getElementById('screen-quiz'),
  screenResults: document.getElementById('screen-results'),
  
  appTitle: document.getElementById('app-title'),
  journeyMap: document.querySelector('.journey-map'),
  journeyStageName: document.getElementById('journey-stage-name'),
  journeyCount: document.getElementById('journey-count'),
  journeyProgressBar: document.getElementById('journey-progress-bar'),
  crawlingCaterpillar: document.getElementById('crawling-caterpillar'),
  illustrationPanel: document.getElementById('illustration-panel'),
  questionIndexDisplay: document.getElementById('question-index-display'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  feedbackPanel: document.getElementById('feedback-panel'),
  feedbackIcon: document.getElementById('feedback-icon'),
  feedbackMessage: document.getElementById('feedback-message'),
  feedbackModal: document.getElementById('feedback-modal'),
  feedbackModalCard: document.getElementById('feedback-modal-card'),
  feedbackModalIcon: document.getElementById('feedback-modal-icon'),
  feedbackModalTitle: document.getElementById('feedback-modal-title'),
  feedbackModalMessage: document.getElementById('feedback-modal-message'),
  btnModalNext: document.getElementById('btn-modal-next'),
  
  scoreValue: document.getElementById('score-value'),
  scoreEvalCn: document.getElementById('score-eval-cn'),
  scoreEvalEn: document.getElementById('score-eval-en'),
  confettiContainer: document.getElementById('confetti-container')
};

// ==========================================================================
// SCREEN NAVIGATION STATE MACHINE
// ==========================================================================
function switchScreen(screenName) {
  state.currentScreen = screenName;
  
  // Remove active classes
  DOM.screenWelcome.classList.remove('active');
  DOM.screenQuiz.classList.remove('active');
  DOM.screenResults.classList.remove('active');
  
  // Set target screen active
  if (screenName === 'welcome') {
    DOM.screenWelcome.classList.add('active');
  } else if (screenName === 'quiz') {
    DOM.screenQuiz.classList.add('active');
  } else if (screenName === 'results') {
    DOM.screenResults.classList.add('active');
  }
}

// ==========================================================================
// BILINGUAL LANGUAGE SWAPPER
// ==========================================================================
function updateLanguageUI() {
  const isEn = state.currentLang === 'en';
  
  // Toggle display flags on document
  document.documentElement.lang = isEn ? 'en' : 'zh-CN';
  
  // Update control button label
  DOM.btnLang.querySelector('.lang-text').innerText = isEn ? '中文' : 'EN';
  DOM.btnLang.querySelector('.lang-flag').innerText = isEn ? '🇨🇳' : '🇬🇧';
  DOM.btnLang.setAttribute('aria-label', isEn ? 'Switch to Chinese' : '切换为英文');

  // Toggle .hidden classes for Chinese/English elements globally
  document.querySelectorAll('.text-cn').forEach(el => {
    if (isEn) el.classList.add('hidden');
    else el.classList.remove('hidden');
  });
  
  document.querySelectorAll('.text-en').forEach(el => {
    if (isEn) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });

  // Update App title header
  DOM.appTitle.innerText = isEn ? "Silkworm Adventure Quiz" : "蚕宝宝成长记";

  // Re-render current question with updated language details if in quiz mode
  if (state.currentScreen === 'quiz') {
    updateProgressTracker();
    renderCurrentQuestionText();
  }
}

function toggleLanguage() {
  sounds.playClick();
  state.currentLang = state.currentLang === 'cn' ? 'en' : 'cn';
  updateLanguageUI();
}

// ==========================================================================
// QUIZ GAMEPLAY CORE LOGIC
// ==========================================================================
function startQuiz() {
  sounds.playClick();
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.hasAnsweredCurrent = false;
  
  switchScreen('quiz');
  updateProgressTracker();
  renderQuestion(0);
}

function updateProgressTracker() {
  const total = QUIZ_QUESTIONS.length;
  const maxIndex = Math.max(total - 1, 1);
  const percentage = (state.currentQuestionIndex / maxIndex) * 100;
  
  const boundedPercentage = Math.max(0, Math.min(100, percentage));
  const trackPercentage = boundedPercentage * 0.84;

  document.documentElement.style.setProperty('--progress-percent', `${boundedPercentage}%`);
  document.documentElement.style.setProperty('--progress-track-percent', `${trackPercentage}%`);
  
  // Find which life stage node to highlight
  // Egg (stage 0): index 0, 1
  // Baby (stage 1): index 2, 3
  // Big (stage 2): index 4, 5
  // Cocoon (stage 3): index 6
  // Moth (stage 4): index 7 & completion
  let currentStageIndex = 0;
  if (state.currentQuestionIndex >= 7) currentStageIndex = 4; // moth
  else if (state.currentQuestionIndex >= 6) currentStageIndex = 3; // cocoon
  else if (state.currentQuestionIndex >= 4) currentStageIndex = 2; // big silkworm
  else if (state.currentQuestionIndex >= 2) currentStageIndex = 1; // baby silkworm

  const stageNames = state.currentLang === 'en'
    ? ['Egg', 'Baby Silkworm', 'Growing Silkworm', 'Cocoon', 'Silk Moth']
    : ['蚕卵', '小蚕', '大蚕', '结茧', '蚕蛾'];

  if (DOM.journeyStageName) {
    DOM.journeyStageName.innerText = stageNames[currentStageIndex];
  }

  if (DOM.journeyCount) {
    DOM.journeyCount.innerText = `${state.currentQuestionIndex + 1} / ${total}`;
  }

  if (DOM.journeyMap) {
    DOM.journeyMap.setAttribute('aria-valuenow', String(state.currentQuestionIndex + 1));
    DOM.journeyMap.setAttribute('aria-valuemax', String(total));
    DOM.journeyMap.setAttribute('aria-valuetext', `${stageNames[currentStageIndex]}, ${state.currentQuestionIndex + 1} of ${total}`);
  }
  
  // Update node classes
  for (let i = 0; i < 5; i++) {
    const node = document.getElementById(`node-${i}`);
    if (i < currentStageIndex) {
      node.classList.add('completed');
      node.classList.remove('active');
    } else if (i === currentStageIndex) {
      node.classList.add('active');
      node.classList.remove('completed');
    } else {
      node.classList.remove('active', 'completed');
    }
  }
}

function renderQuestion(index) {
  state.currentQuestionIndex = index;
  state.hasAnsweredCurrent = false;
  
  // Hide feedback panel
  DOM.feedbackPanel.classList.add('hidden');
  closeFeedbackModal();
  
  // Stop any active speech read alouds
  speech.stop();
  answerFeedbackAudio.stop();
  if (DOM.btnSpeak) DOM.btnSpeak.classList.remove('speaking');
  
  // Dynamic illustration panel load
  const q = QUIZ_QUESTIONS[index];
  DOM.illustrationPanel.innerHTML = q.illustration;
  
  // Render actual texts
  renderCurrentQuestionText();
  
  // Automatically speak the question out loud after a brief delay
  setTimeout(() => {
    speakCurrentQuestion();
  }, 400);
}

function renderCurrentQuestionText() {
  const index = state.currentQuestionIndex;
  const q = QUIZ_QUESTIONS[index];
  const isEn = state.currentLang === 'en';
  const langData = isEn ? q.en : q.cn;
  
  // Question indicator
  DOM.questionIndexDisplay.innerText = isEn 
    ? `Question ${index + 1} of ${QUIZ_QUESTIONS.length}` 
    : `第 ${index + 1} 题（共 ${QUIZ_QUESTIONS.length} 题）`;
    
  // Question Title
  DOM.questionText.innerText = langData.question;
  
  // Render Options
  DOM.optionsContainer.innerHTML = '';
  
  langData.options.forEach((option, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.id = `option-${optIdx}`;
    
    // Accessibility index binding
    const badgeText = String.fromCharCode(65 + optIdx); // A, B, C
    if (typeof option !== 'string' && option.alt) {
      btn.setAttribute('aria-label', `${badgeText}. ${getCleanOptionText(option)}. ${option.alt}`);
    }
    
    btn.innerHTML = `
      <span class="option-badge">${badgeText}</span>
      ${getOptionImageMarkup(option)}
      <span class="option-label-text">${getCleanOptionText(option)}</span>
    `;
    
    // Add click handler
    btn.addEventListener('click', () => selectOption(optIdx));
    DOM.optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIdx) {
  if (state.hasAnsweredCurrent) return;
  state.hasAnsweredCurrent = true;
  
  // Stop speaking the question text
  speech.stop();
  answerFeedbackAudio.stop();
  if (DOM.btnSpeak) DOM.btnSpeak.classList.remove('speaking');
  
  const q = QUIZ_QUESTIONS[state.currentQuestionIndex];
  const correctIdx = q.correctAnswer;
  const isCorrect = selectedIdx === correctIdx;
  const isEn = state.currentLang === 'en';
  const langData = isEn ? q.en : q.cn;
  
  // Disable all option buttons, and color target button
  const buttons = DOM.optionsContainer.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.setAttribute('aria-checked', idx === selectedIdx ? 'true' : 'false');
    
    if (idx === correctIdx) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('incorrect');
    } else {
      btn.classList.add('disabled');
    }
  });
  
  // Set feedback state & trigger voice
  const feedbackSpeech = isCorrect ? langData.correctFeedback : langData.incorrectFeedback;
  answerFeedbackAudio.play(isCorrect, () => {
    speech.playLocalAudio(
      getFeedbackAudioPath(state.currentQuestionIndex, state.currentLang, isCorrect),
      feedbackSpeech,
      state.currentLang
    );
  });
  
  if (isCorrect) {
    state.score++;
    DOM.feedbackIcon.innerText = "🎉";
    DOM.feedbackMessage.innerText = langData.correctFeedback;
    DOM.feedbackModalIcon.innerText = "🎉";
    DOM.feedbackModalTitle.innerText = isEn ? "Correct!" : "答对啦！";
    DOM.feedbackModalMessage.innerText = langData.correctFeedback;
    DOM.feedbackModalCard.classList.add('correct');
    DOM.feedbackModalCard.classList.remove('incorrect');
    DOM.feedbackPanel.querySelector('.feedback-content').style.borderColor = "var(--correct)";
    DOM.feedbackPanel.querySelector('.feedback-content').style.backgroundColor = "#f1faf0";
  } else {
    DOM.feedbackIcon.innerText = "💡";
    DOM.feedbackMessage.innerText = langData.incorrectFeedback;
    DOM.feedbackModalIcon.innerText = "💡";
    DOM.feedbackModalTitle.innerText = isEn ? "Good Try!" : "再想想哦！";
    DOM.feedbackModalMessage.innerText = langData.incorrectFeedback;
    DOM.feedbackModalCard.classList.add('incorrect');
    DOM.feedbackModalCard.classList.remove('correct');
    DOM.feedbackPanel.querySelector('.feedback-content').style.borderColor = "var(--incorrect)";
    DOM.feedbackPanel.querySelector('.feedback-content').style.backgroundColor = "#fff5f5";
  }
  
  openFeedbackModal();
}

function handleNextQuestion() {
  sounds.playClick();
  closeFeedbackModal();
  
  const nextIdx = state.currentQuestionIndex + 1;
  const total = QUIZ_QUESTIONS.length;
  
  if (nextIdx < total) {
    // Transition to next question
    renderQuestion(nextIdx);
    updateProgressTracker();
  } else {
    // Reached the end! Final transition
    showResults();
  }
}

function openFeedbackModal() {
  DOM.feedbackModal.classList.remove('hidden');
  DOM.feedbackModal.setAttribute('aria-hidden', 'false');
  DOM.btnModalNext.focus();
}

function closeFeedbackModal() {
  DOM.feedbackModal.classList.add('hidden');
  DOM.feedbackModal.setAttribute('aria-hidden', 'true');
}

// ==========================================================================
// RESULTS SCREEN & CELEBRATION EFFECTS
// ==========================================================================
function showResults() {
  updateProgressTracker();
  switchScreen('results');
  
  // Play fan fare
  sounds.playSuccess();
  
  // Render score details
  DOM.scoreValue.innerText = state.score;
  
  const isEn = state.currentLang === 'en';
  const scoreEvaluationsCn = {
    8: "哇！你是超级蚕宝宝大专家！🌟",
    7: "太棒了！蚕宝宝非常感谢你的照顾！💖",
    6: "很不错哦！你已经很了解蚕宝宝了！🌱",
    default: "继续加油！多和蚕宝宝交朋友吧！🐛"
  };
  
  const scoreEvaluationsEn = {
    8: "Awesome! You are a Silkworm Super Expert! 🌟",
    7: "Great job! The silkworms are so happy! 💖",
    6: "Nice! You know a lot about silkworms! 🌱",
    default: "Keep it up! Let's learn more about silkworms! 🐛"
  };
  
  DOM.scoreEvalCn.innerText = scoreEvaluationsCn[state.score] || scoreEvaluationsCn.default;
  DOM.scoreEvalEn.innerText = scoreEvaluationsEn[state.score] || scoreEvaluationsEn.default;

  // Fire confetti animation
  launchConfetti();
}

function launchConfetti() {
  DOM.confettiContainer.innerHTML = '';
  const colors = ['#ffd15c', '#75cb52', '#69b3ff', '#ff8ba4', '#d296c8'];
  
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    // Random sizes
    const size = Math.random() * 8 + 6;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    // Vary fall animations
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    confetti.style.animationDelay = `${Math.random() * 1.5}s`;
    
    DOM.confettiContainer.appendChild(confetti);
  }
}

function restartQuiz() {
  sounds.playClick();
  speech.stop();
  answerFeedbackAudio.stop();
  switchScreen('welcome');
}

// ==========================================================================
// AUDIO SYSTEM CONTROLLER
// ==========================================================================
function toggleSound() {
  const isMuted = sounds.toggleMute();
  DOM.btnSound.querySelector('.sound-icon').innerText = isMuted ? '🔇' : '🔊';
  DOM.btnSound.setAttribute('aria-label', isMuted ? 'Unmute sounds' : 'Mute sounds');
  
  if (isMuted) {
    speech.stop();
    answerFeedbackAudio.stop();
    if (DOM.btnSpeak) DOM.btnSpeak.classList.remove('speaking');
  } else {
    sounds.playClick();
  }
}

// ==========================================================================
// ACCESSIBILITY: KEYBOARD CONTROL BINDINGS
// ==========================================================================
function handleKeyDown(e) {
  // If we are on the quiz page and haven't answered yet
  if (state.currentScreen === 'quiz') {
    if (!state.hasAnsweredCurrent) {
      // Numerical keys 1, 2, 3 or keys a, b, c
      if (e.key === '1' || e.key.toLowerCase() === 'a') {
        selectOption(0);
      } else if (e.key === '2' || e.key.toLowerCase() === 'b') {
        selectOption(1);
      } else if (e.key === '3' || e.key.toLowerCase() === 'c') {
        selectOption(2);
      }
    } else {
      // If already answered, pressing Enter or Space proceeds to the next question
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNextQuestion();
      }
    }
  } else if (state.currentScreen === 'welcome') {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      startQuiz();
    }
  } else if (state.currentScreen === 'results') {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      restartQuiz();
    }
  }
}

// ==========================================================================
// EVENT INITIALIZATION REGISTER
// ==========================================================================
function init() {
  // Navigation elements
  DOM.btnLang.addEventListener('click', toggleLanguage);
  DOM.btnSound.addEventListener('click', toggleSound);
  DOM.btnStart.addEventListener('click', startQuiz);
  DOM.btnNext.addEventListener('click', handleNextQuestion);
  DOM.btnModalNext.addEventListener('click', handleNextQuestion);
  DOM.btnRestart.addEventListener('click', restartQuiz);
  
  // Speak question replay button
  DOM.btnSpeak = document.getElementById('btn-speak');
  if (DOM.btnSpeak) {
    DOM.btnSpeak.addEventListener('click', () => {
      speakCurrentQuestion();
    });
  }
  
  // Keyboard listeners
  window.addEventListener('keydown', handleKeyDown);
  if ('speechSynthesis' in window) {
    speech.loadVoices();
    window.speechSynthesis.onvoiceschanged = () => speech.loadVoices();
  }
  
  // Set default language view
  updateLanguageUI();
}

// Start app on DOM load
window.addEventListener('DOMContentLoaded', init);
