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
      options: ["A. 青菜叶", "B. 桑叶", "C. 白菜叶"],
      correctFeedback: "真棒！蚕宝宝最喜欢吃绿油油的桑叶啦！🌿",
      incorrectFeedback: "哎呀，不对哦。其实蚕宝宝最爱吃的是桑树上的叶子。"
    },
    en: {
      question: "1. What is the silkworm's favorite food?",
      options: ["A. Green vegetables", "B. Mulberry leaves", "C. Cabbage leaves"],
      correctFeedback: "Awesome! Silkworms love eating yummy green mulberry leaves! 🌿",
      incorrectFeedback: "Oops, not quite. Silkworms actually love leaves from the mulberry tree."
    },
    correctAnswer: 1, // B
    stageIndex: 0, // Egg / Start stage
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- A gorgeous mulberry leaf being eaten by a small caterpillar -->
        <g class="svg-leaf-feed">
          <path d="M40 100 Q 80 20 160 50 Q 140 110 40 100 Z" fill="#75cb52" stroke="#5a9e3e" stroke-width="4" />
          <path d="M40 100 Q 95 65 160 50" stroke="#5a9e3e" stroke-width="2" fill="none" />
          <path d="M90 77 Q 110 95 120 105" stroke="#5a9e3e" stroke-width="2" fill="none" />
          <path d="M120 63 Q 140 80 150 90" stroke="#5a9e3e" stroke-width="2" fill="none" />
          <!-- Bite marks (transparent circles) -->
          <circle cx="160" cy="50" r="18" fill="#e9f7df" class="bite-mark" />
          <circle cx="150" cy="38" r="14" fill="#e9f7df" class="bite-mark" />
          <circle cx="142" cy="62" r="12" fill="#e9f7df" class="bite-mark" />
        </g>
        <!-- Little baby caterpillar -->
        <g transform="translate(105, 55) scale(0.9)" class="caterpillar-mini">
          <circle cx="10" cy="15" r="9" fill="#a2df8a" stroke="#5a9e3e" stroke-width="1.5" />
          <circle cx="20" cy="12" r="9" fill="#a2df8a" stroke="#5a9e3e" stroke-width="1.5" />
          <circle cx="30" cy="15" r="10" fill="#92d677" stroke="#5a9e3e" stroke-width="1.5" />
          <circle cx="40" cy="12" r="11" fill="#7dcd5e" stroke="#5a9e3e" stroke-width="1.5" />
          <circle cx="50" cy="15" r="12" fill="#69c347" stroke="#5a9e3e" stroke-width="2" />
          <!-- Head -->
          <circle cx="58" cy="10" r="11" fill="#5db93a" stroke="#489729" stroke-width="2" />
          <circle cx="61" cy="7" r="1.5" fill="#222" />
          <path d="M60 14 Q 57 11 54 12" stroke="#222" stroke-width="1" fill="none" />
        </g>
      </svg>
    `
  },
  {
    // Q2
    cn: {
      question: "2. 蚕宝宝最后会变成什么？",
      options: ["A. 蜜蜂", "B. 蝴蝶", "C. 蚕蛾"],
      correctFeedback: "太聪明啦！蚕宝宝吐丝结茧后，最终会变成白白的蚕蛾！🦋",
      incorrectFeedback: "不对哟。虽然蝴蝶和蜜蜂也很漂亮，但蚕宝宝会变成可爱的蚕蛾。"
    },
    en: {
      question: "2. What will the silkworm turn into in the end?",
      options: ["A. Bee", "B. Butterfly", "C. Silk moth"],
      correctFeedback: "Super smart! After spinning cocoons, silkworms transform into white silk moths! 🦋",
      incorrectFeedback: "Not quite. Although bees and butterflies are pretty, silkworms turn into silk moths."
    },
    correctAnswer: 2, // C
    stageIndex: 0,
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- Silk Moth vector representation -->
        <g transform="translate(100, 75) scale(0.7)" class="moth-illustration">
          <!-- Wings -->
          <g class="wing wing-left">
            <path d="M-10 -10 Q -80 -60 -90 0 Q -80 40 -10 0 Z" fill="#ffffff" stroke="#d5cea3" stroke-width="3" />
          </g>
          <g class="wing wing-right">
            <path d="M10 -10 Q 80 -60 90 0 Q 80 40 10 0 Z" fill="#ffffff" stroke="#d5cea3" stroke-width="3" />
          </g>
          <!-- Body -->
          <ellipse cx="0" cy="0" rx="15" ry="25" fill="#fcfbf7" stroke="#d5cea3" stroke-width="2" />
          <circle cx="0" cy="-25" r="12" fill="#ebe6d0" stroke="#d5cea3" stroke-width="2" />
          <!-- Face details -->
          <circle cx="-5" cy="-27" r="3" fill="#222" />
          <circle cx="5" cy="-27" r="3" fill="#222" />
          <path d="M-12 -38 Q -30 -50 -40 -40" stroke="#7d5a3e" stroke-width="2" fill="none" />
          <path d="M12 -38 Q 30 -50 40 -40" stroke="#7d5a3e" stroke-width="2" fill="none" />
        </g>
        <!-- Sparkles -->
        <path d="M 40,40 L 45,45 M 40,45 L 45,40" stroke="#ffd15c" stroke-width="3" stroke-linecap="round" />
        <path d="M 160,110 L 165,115 M 160,115 L 165,110" stroke="#ffd15c" stroke-width="3" stroke-linecap="round" />
        <path d="M 150,30 L 155,35 M 150,35 L 155,30" stroke="#ffd15c" stroke-width="3" stroke-linecap="round" />
      </svg>
    `
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
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- Leaf with water droplets and a warning red circle cross -->
        <g transform="translate(20, 10)">
          <path d="M30 90 Q 70 10 140 40 Q 120 100 30 90 Z" fill="#75cb52" stroke="#5a9e3e" stroke-width="3" />
          <path d="M30 90 Q 85 55 140 40" stroke="#5a9e3e" stroke-width="2" fill="none" />
          <!-- Droplets -->
          <circle cx="70" cy="50" r="5" fill="#69b3ff" opacity="0.9" />
          <path d="M70 45 Q 70 50 67 52 Q 73 52 70 45" fill="#69b3ff" />
          
          <circle cx="105" cy="65" r="4" fill="#69b3ff" opacity="0.9" />
          <path d="M105 61 Q 105 65 102 67 Q 108 67 105 61" fill="#69b3ff" />
          
          <!-- Drip dropping animation representation -->
          <g class="water-drop">
            <circle cx="115" cy="30" r="3.5" fill="#69b3ff" />
          </g>
        </g>
        
        <!-- Red Warning Sign -->
        <g transform="translate(135, 95)">
          <circle cx="20" cy="20" r="22" fill="none" stroke="#ff5c5c" stroke-width="6" />
          <line x1="6" y1="6" x2="34" y2="34" stroke="#ff5c5c" stroke-width="6" />
        </g>
      </svg>
    `
  },
  {
    // Q4
    cn: {
      question: "4. 蚕生命开始的样子是？",
      options: ["A. 蚕卵", "B. 小蚕", "C. 蚕蛹"],
      correctFeedback: "完全正确！蚕的一生是从像小米粒一样的蚕卵开始的！🥚",
      incorrectFeedback: "不对哦。蚕宝宝不是一生下来就是毛毛虫或蛹，它是从卵里孵出来的。"
    },
    en: {
      question: "4. What does a silkworm's life start as?",
      options: ["A. Silkworm egg", "B. Baby silkworm", "C. Silkworm pupa"],
      correctFeedback: "Spot on! A silkworm's life begins as a tiny egg, looking like a little grain of millet! 🥚",
      incorrectFeedback: "Not quite. Silkworms aren't born as caterpillars or pupae; they hatch from eggs."
    },
    correctAnswer: 0, // A
    stageIndex: 1,
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- Cute branch/leaf with little eggs on it -->
        <path d="M20 120 C 60 120 140 100 180 80" stroke="#8e6a4b" stroke-width="6" stroke-linecap="round" fill="none" />
        <path d="M80 106 Q 100 70 140 75 Q 120 110 80 106 Z" fill="#8fcf7a" stroke="#5a9e3e" stroke-width="2" />
        
        <!-- Little silkworm eggs (tiny yellowish/purple circles) -->
        <g class="egg-glow">
          <ellipse cx="98" cy="92" rx="4" ry="5" fill="#f3d87b" stroke="#cbb24f" stroke-width="1" />
          <ellipse cx="106" cy="88" rx="4" ry="5" fill="#eed274" stroke="#cbb24f" stroke-width="1" />
          <ellipse cx="114" cy="94" rx="4" ry="5" fill="#eed274" stroke="#cbb24f" stroke-width="1" />
          <ellipse cx="105" cy="98" rx="5" ry="4" fill="#dfb36b" stroke="#b08b43" stroke-width="1" />
          <ellipse cx="122" cy="87" rx="4" ry="5" fill="#d296c8" stroke="#a06096" stroke-width="1" />
          <ellipse cx="126" cy="96" rx="5" ry="4" fill="#c385b9" stroke="#a06096" stroke-width="1" />
        </g>
        
        <!-- Magnifying glass looking at the eggs -->
        <g transform="translate(30, 20)">
          <!-- Glass effect background -->
          <circle cx="45" cy="45" r="30" fill="rgba(100, 200, 255, 0.15)" stroke="#555" stroke-width="4" />
          <line x1="66" y1="66" x2="90" y2="90" stroke="#7a5435" stroke-width="8" stroke-linecap="round" />
          <!-- Reflection streak -->
          <path d="M25 35 A 22 22 0 0 1 55 20" stroke="white" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6" />
        </g>
      </svg>
    `
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
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- Silkworm shedding its skin -->
        <g transform="translate(15, 20)">
          <!-- Old shed skin left behind -->
          <g opacity="0.65" transform="rotate(-15) translate(0, 40)">
            <path d="M20 70 Q 30 65 40 70 T 60 70 T 80 70" fill="none" stroke="#ddd6c1" stroke-width="12" stroke-linecap="round" />
            <path d="M20 70 Q 30 65 40 70 T 60 70 T 80 70" fill="none" stroke="#bfa881" stroke-dasharray="1,5" stroke-width="12" stroke-linecap="round" />
          </g>
          
          <!-- Arrow pointing forward -->
          <path d="M85 55 L 105 55 M 100 48 L 107 55 L 100 62" stroke="#75cb52" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          
          <!-- Larger caterpillar stepping forward -->
          <g transform="translate(100, 20)">
            <!-- Segments -->
            <circle cx="10" cy="50" r="14" fill="#eefae8" stroke="#75cb52" stroke-width="2" />
            <circle cx="24" cy="46" r="15" fill="#eefae8" stroke="#75cb52" stroke-width="2" />
            <circle cx="38" cy="42" r="16" fill="#e8f7df" stroke="#75cb52" stroke-width="2" />
            <circle cx="52" cy="45" r="17" fill="#dcf3d0" stroke="#75cb52" stroke-width="2" />
            <circle cx="68" cy="50" r="18" fill="#cbeeb9" stroke="#75cb52" stroke-width="2" />
            <!-- Head -->
            <circle cx="82" cy="43" r="16" fill="#b9e7a2" stroke="#5cb22d" stroke-width="2.5" />
            <circle cx="86" cy="39" r="2" fill="#222" />
            <!-- Happy face -->
            <path d="M85 47 Q 81 44 78 46" stroke="#222" stroke-width="1.5" fill="none" />
            <!-- Sparkles -->
            <path d="M 68,15 L 72,25 M 63,20 L 73,20" stroke="#ffd15c" stroke-width="2" />
          </g>
        </g>
      </svg>
    `
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
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- 4 shirts/skins row representing the 4 sheds -->
        <g transform="translate(15, 45)">
          <!-- Skin 1 -->
          <g transform="translate(0, 10) scale(0.7)">
            <ellipse cx="20" cy="40" rx="12" ry="20" fill="#fcf9ee" stroke="#b8ad8f" stroke-dasharray="2,2" stroke-width="2" />
            <circle cx="20" cy="15" r="10" fill="#ddd" />
            <text x="20" y="70" font-family="Fredoka" font-size="16" font-weight="bold" fill="#7a6c4b" text-anchor="middle">1st</text>
          </g>
          <!-- Skin 2 -->
          <g transform="translate(42, 5) scale(0.8)">
            <ellipse cx="20" cy="40" rx="12" ry="20" fill="#fcf9ee" stroke="#b8ad8f" stroke-dasharray="2,2" stroke-width="2" />
            <circle cx="20" cy="15" r="10" fill="#ddd" />
            <text x="20" y="70" font-family="Fredoka" font-size="16" font-weight="bold" fill="#7a6c4b" text-anchor="middle">2nd</text>
          </g>
          <!-- Skin 3 -->
          <g transform="translate(88, 0) scale(0.9)">
            <ellipse cx="20" cy="40" rx="12" ry="20" fill="#fcf9ee" stroke="#b8ad8f" stroke-dasharray="2,2" stroke-width="2" />
            <circle cx="20" cy="15" r="10" fill="#ddd" />
            <text x="20" y="70" font-family="Fredoka" font-size="16" font-weight="bold" fill="#7a6c4b" text-anchor="middle">3rd</text>
          </g>
          <!-- Skin 4 -->
          <g transform="translate(138, -5) scale(1)">
            <ellipse cx="20" cy="40" rx="14" ry="22" fill="#fff9e2" stroke="#cca83c" stroke-width="3" />
            <circle cx="20" cy="15" r="11" fill="#75cb52" stroke="#5a9e3e" stroke-width="1.5" />
            <text x="20" y="75" font-family="Fredoka" font-size="16" font-weight="bold" fill="#c89d20" text-anchor="middle">4th 🎉</text>
          </g>
        </g>
      </svg>
    `
  },
  {
    // Q7
    cn: {
      question: "7. 蚕蛾会不会飞？",
      options: ["A. 飞得很高", "B. 只会扑扇翅膀，不会远飞", "C. 完全不会动"],
      correctFeedback: "答对了！蚕蛾有翅膀，但已经退化了，只会扑扇翅膀在地上爬，不能飞高飞远。" + "🦋👣",
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
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- Silk moth fluttering on a wooden log or ground -->
        <!-- Ground line -->
        <path d="M20 120 Q 100 110 180 120" stroke="#bbb" stroke-width="3" fill="none" />
        
        <g transform="translate(100, 80) scale(0.65)">
          <!-- Flutter indicators -->
          <path d="M-85 -45 Q -95 -25 -70 -15" stroke="#ccc" stroke-dasharray="3,3" stroke-width="2" fill="none" />
          <path d="M85 -45 Q 95 -25 70 -15" stroke="#ccc" stroke-dasharray="3,3" stroke-width="2" fill="none" />
          
          <!-- Moth body and fluttering wings -->
          <g class="wing wing-left">
            <path d="M-10 -10 Q -80 -70 -90 0 Q -80 40 -10 0 Z" fill="#fdfcf8" stroke="#d5cea3" stroke-width="3" />
          </g>
          <g class="wing wing-right">
            <path d="M10 -10 Q 80 -70 90 0 Q 80 40 10 0 Z" fill="#fdfcf8" stroke="#d5cea3" stroke-width="3" />
          </g>
          <ellipse cx="0" cy="0" rx="16" ry="26" fill="#fbfaf3" stroke="#d2c99a" stroke-width="2" />
          <circle cx="0" cy="-26" r="13" fill="#eae4ca" stroke="#d2c99a" stroke-width="2" />
          
          <!-- Eyes -->
          <circle cx="-5" cy="-28" r="3" fill="#222" />
          <circle cx="5" cy="-28" r="3" fill="#222" />
          
          <!-- Fluff antennae -->
          <path d="M-10 -38 Q -28 -48 -35 -40" stroke="#7d5a3e" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <path d="M10 -38 Q 28 -48 35 -40" stroke="#7d5a3e" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </g>
        
        <!-- Little walking dust paths -->
        <circle cx="65" cy="112" r="1.5" fill="#aaa" />
        <circle cx="55" cy="115" r="1.5" fill="#aaa" />
        <circle cx="135" cy="114" r="1.5" fill="#aaa" />
        <circle cx="145" cy="111" r="1.5" fill="#aaa" />
      </svg>
    `
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
    illustration: `
      <svg viewBox="0 0 200 150" width="100%" height="100%">
        <!-- Large caterpillar body segment closeup showing spiracles -->
        <g transform="translate(10, 10)">
          <!-- Segment curved shape -->
          <path d="M30 65 Q 90 20 150 65 Q 160 120 20 100 Z" fill="#edf9e6" stroke="#75cb52" stroke-width="3" />
          
          <!-- Highlighted Spiracle (black dot with glowing highlight) -->
          <circle cx="90" cy="70" r="11" fill="#444" stroke="#ffb13b" stroke-width="3" />
          <circle cx="90" cy="70" r="6" fill="#111" />
          
          <!-- Breathing circles representation -->
          <circle cx="90" cy="70" r="18" fill="none" stroke="#ffb13b" stroke-width="1.5" opacity="0.6" stroke-dasharray="2,3">
            <animate attributeName="r" values="12;28" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
          </circle>
          
          <!-- Small labels inside the SVG -->
          <text x="90" y="105" font-family="Fredoka" font-size="11" font-weight="bold" fill="#75cb52" text-anchor="middle">气门 / Spiracle</text>
          
          <!-- Secondary dots -->
          <circle cx="45" cy="78" r="4" fill="#555" />
          <circle cx="135" cy="76" r="4" fill="#555" />
        </g>
      </svg>
    `
  }
];

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
  
  screenWelcome: document.getElementById('screen-welcome'),
  screenQuiz: document.getElementById('screen-quiz'),
  screenResults: document.getElementById('screen-results'),
  
  appTitle: document.getElementById('app-title'),
  journeyProgressBar: document.getElementById('journey-progress-bar'),
  crawlingCaterpillar: document.getElementById('crawling-caterpillar'),
  illustrationPanel: document.getElementById('illustration-panel'),
  questionIndexDisplay: document.getElementById('question-index-display'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  feedbackPanel: document.getElementById('feedback-panel'),
  feedbackIcon: document.getElementById('feedback-icon'),
  feedbackMessage: document.getElementById('feedback-message'),
  
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
  DOM.appTitle.innerText = isEn ? "Silkworm's Adventure" : "蚕宝宝成长记";

  // Re-render current question with updated language details if in quiz mode
  if (state.currentScreen === 'quiz') {
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
  // Calculate percentage (0% to 100%)
  const percentage = (state.currentQuestionIndex / total) * 100;
  
  // Set progress CSS custom property
  document.documentElement.style.setProperty('--progress-percent', `${percentage}%`);
  
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
  
  // Dynamic illustration panel load
  const q = QUIZ_QUESTIONS[index];
  DOM.illustrationPanel.innerHTML = q.illustration;
  
  // Render actual texts
  renderCurrentQuestionText();
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
  
  langData.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', 'false');
    btn.id = `option-${optIdx}`;
    
    // Accessibility index binding
    const badgeText = String.fromCharCode(65 + optIdx); // A, B, C
    
    btn.innerHTML = `
      <span class="option-badge">${badgeText}</span>
      <span class="option-label-text">${optText}</span>
    `;
    
    // Add click handler
    btn.addEventListener('click', () => selectOption(optIdx));
    DOM.optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIdx) {
  if (state.hasAnsweredCurrent) return;
  state.hasAnsweredCurrent = true;
  
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
  
  // Set feedback state
  if (isCorrect) {
    state.score++;
    sounds.playCorrect();
    DOM.feedbackIcon.innerText = "🎉";
    DOM.feedbackMessage.innerText = langData.correctFeedback;
    DOM.feedbackPanel.querySelector('.feedback-content').style.borderColor = "var(--correct)";
    DOM.feedbackPanel.querySelector('.feedback-content').style.backgroundColor = "#f1faf0";
  } else {
    sounds.playIncorrect();
    DOM.feedbackIcon.innerText = "💡";
    DOM.feedbackMessage.innerText = langData.incorrectFeedback;
    DOM.feedbackPanel.querySelector('.feedback-content').style.borderColor = "var(--incorrect)";
    DOM.feedbackPanel.querySelector('.feedback-content').style.backgroundColor = "#fff5f5";
  }
  
  // Show feedback panel
  DOM.feedbackPanel.classList.remove('hidden');
}

function handleNextQuestion() {
  sounds.playClick();
  
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
  switchScreen('welcome');
}

// ==========================================================================
// AUDIO SYSTEM CONTROLLER
// ==========================================================================
function toggleSound() {
  const isMuted = sounds.toggleMute();
  DOM.btnSound.querySelector('.sound-icon').innerText = isMuted ? '🔇' : '🔊';
  DOM.btnSound.setAttribute('aria-label', isMuted ? 'Unmute sounds' : 'Mute sounds');
  
  if (!isMuted) {
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
  DOM.btnRestart.addEventListener('click', restartQuiz);
  
  // Keyboard listeners
  window.addEventListener('keydown', handleKeyDown);
  
  // Set default language view
  updateLanguageUI();
}

// Start app on DOM load
window.addEventListener('DOMContentLoaded', init);
