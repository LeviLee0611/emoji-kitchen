const data = [
  {
    type: "Kaomoji",
    theme: "Happy",
    tags: ["happy", "joy", "smile"],
    items: ["(*^▽^*)", "(＾▽＾)", "ヽ(•‿•)ノ", "(*¯︶¯*)", "(*^‿^*)", "(｡♥‿♥｡)", "(≧◡≦)", "(๑˃̵ᴗ˂̵)و", "(✿◠‿◠)", "(￣▽￣)b"]
  },
  {
    type: "Kaomoji",
    theme: "Thinking",
    tags: ["thinking", "hmm"],
    items: ["(￢_￢)", "(・_・ヾ", "(￣～￣;)", "(•ᴗ•?)", "(￣_￣ )", "(・_・?)", "(¬‿¬)", "(•́⍛•̀)", "(￣ヘ￣)", "(・・?)"]
  },
  {
    type: "Kaomoji",
    theme: "Excited",
    tags: ["excited", "yay", "party"],
    items: ["٩(ˊᗜˋ*)و", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "(≧▽≦)", "＼(＾▽＾)／", "(๑˃̵ᴗ˂̵)و", "ᕕ( ᐛ )ᕗ", "(☆▽☆)", "(✧ω✧)", "ヽ(>∀<)ﾉ", "(≧◡≦)"]
  },
  {
    type: "Kaomoji",
    theme: "Please",
    tags: ["please", "beg"],
    items: ["(。-人-。)", "(ㅅ´ ˘ `)", "(。•́︿•̀。)", "( •́ ᵕ •̀ )", "(人´∀｀)｡ﾟ+", "(๑´ㅂ`๑)", "(｡-人-｡)", "(＞人＜;)", "(╥﹏╥)", "( •́⍛•̀)՞"]
  },
  {
    type: "Kaomoji",
    theme: "Weird",
    tags: ["weird", "confused", "odd"],
    items: ["(⊙＿⊙')", "(°ロ°) !", "(⊙_☉)", "(ಠ_ಠ)", "(╯°□°）╯︵ ┻━┻", "(⊙ω⊙)", "(⊙﹏⊙)", "(⊙_◎)", "(☉_☉)", "(°∀°)b"]
  },
  {
    type: "Kaomoji",
    theme: "Wink",
    tags: ["wink"],
    items: ["(^_~)", "(・ω<)", "(ˆ◡ˆ)~", "(^.~)", "(￣▽－)☆", "(•‿-)", "(¬‿¬)", "(^_-)", "(•◡-)", "(⌒_−)☆"]
  },
  {
    type: "Kaomoji",
    theme: "Hello",
    tags: ["hello", "hi", "greet"],
    items: ["(｡•‿•｡)ﾉ", "(￣▽￣)ノ", "( ´ ▽ ` )ﾉ", "( ^_^)／", "(っ´▽｀)っ", "(＾◇＾)ノ", "(・∀・)ノ", "( ^_^)／", "(・ω・)ノ", "(=ﾟωﾟ)ﾉ"]
  },
  {
    type: "Kaomoji",
    theme: "Salute",
    tags: ["salute", "respect"],
    items: ["(￣^￣)ゞ", "(｀_´)ゞ", "(￣-￣)ゞ", "(・_・)ゞ", "(｀・ω・´)ゞ", "(￣^￣ゞ)", "(￣^￣)ゞ", "(｡◕‿◕｡)ゞ", "(｀_´)ゞ", "(￣-￣)ゞ"]
  },
  {
    type: "Kaomoji",
    theme: "Fear",
    tags: ["fear", "scared"],
    items: ["(°ロ°)☝", "(⊙︿⊙)", "( ;ﾟДﾟ)", "(ㆆ_ㆆ)", "(╥﹏╥)", "(；゜ロ゜)", "(＞﹏＜)", "(⊙﹏⊙)", "(；ﾟДﾟ)", "(ಠ﹏ಠ)"]
  },
  {
    type: "Kaomoji",
    theme: "Sad",
    tags: ["sad", "down", "cry"],
    items: ["(；＿；)", "(╯︵╰,)", "(ಥ﹏ಥ)", "(｡•́︿•̀｡)", "(っ- ‸ - ς)", "(T_T)", "(；ω；)", "(╥_╥)", "(；へ：)", "(ಥ_ಥ)"]
  },
  {
    type: "Kaomoji",
    theme: "Thanks",
    tags: ["thanks", "grateful"],
    items: ["(人´∀｀).☆.。.", "(｡•ㅅ•｡)♡", "( •̀ ω •́ )✧", "(⁎˃ ᵕ ˂⁎)", "(≧∇≦)b", "(人´▽`*)", "( ´ ▽ ` )ﾉ", "(๑˃ᴗ˂)ﻭ", "(｡◕‿◕｡)", "( •̀ᴗ•́ )"]
  },
  {
    type: "Kaomoji",
    theme: "Angry",
    tags: ["angry", "mad"],
    items: ["(＃`Д´)", "(╬ಠ益ಠ)", "(ꐦ°᷄д°᷅)", "(¬_¬)", "(ง'̀-'́)ง", "(•̀ᴗ•́)و ̑̑", "(怒)", "(งಠ_ಠ)ง", "(≧︿≦)", "(ಠ_ಠ)"]
  },
  {
    type: "Kaomoji",
    theme: "Love",
    tags: ["love", "heart"],
    items: ["(｡♥‿♥｡)", "(っ˘з(˘⌣˘ )", "(ღ˘⌣˘ღ)", "(˘³˘)♥", "(づ￣ ³￣)づ", "(っ´▽｀)っ♡", "(｡♥‿♥｡)", "(｡♡‿♡｡)", "(ღ˘⌣˘ღ)", "(づ｡◕‿‿◕｡)づ"]
  },
  {
    type: "Kaomoji",
    theme: "Hungry",
    tags: ["hungry", "food"],
    items: ["(๑>﹏<๑)", "(๑´ڡ`๑)", "(っ˘ڡ˘ς)", "(๑•́ ₃ •̀๑)", "(๑´ㅁ`๑)", "(๑¯﹃¯๑)", "(๑>ڡ<๑)", "(๑´ڡ`๑)", "(っ˘ڡ˘ς)", "(๑´ㅂ`๑)"]
  },
  {
    type: "Kaomoji",
    theme: "Sleepy",
    tags: ["sleepy", "tired"],
    items: ["(－_－) zzZ", "(￣o￣) . z Z", "(ᴗ˳ᴗ)", "(u_u)zzZ", "(－.－)...", "(￣﹃￣)", "(－ω－) zzZ", "(￣ρ￣)..zzZZ", "(＿ ＿*) Z z z", "(ｰ｡ｰ)z"]
  },
  {
    type: "Kaomoji",
    theme: "Surprised",
    tags: ["surprise", "wow"],
    items: ["(⊙o⊙)", "(ﾟﾛﾟ)", "(☉_☉)", "Σ(°△°|||)", "(◎_◎;)", "(°ー°〃)", "(ʘᗩʘ')", "(゜o゜)", "(⊙_⊙)", "(°□°)‼"]
  },
  {
    type: "Kaomoji",
    theme: "Cheer",
    tags: ["cheer", "fighting"],
    items: ["(๑•̀ㅂ•́)و✧", "(ง •̀_•́)ง", "٩(๑`^´๑)۶", "(๑•̀ㅁ•́)و", "(๑•̀ㅂ•́)و", "(๑˃̵ᴗ˂̵)و", "(ง •̀_•́)ง", "(๑•̀ᴗ•́)و", "(ง'̀-'́)ง", "(๑˃̵ᴗ˂̵)و"]
  },
  {
    type: "Kaomoji",
    theme: "Hug",
    tags: ["hug"],
    items: ["(っ´▽｀)っ", "(づ｡◕‿‿◕｡)づ", "(っ•̀ω•́)っ", "(づ￣ ³￣)づ", "(つ≧▽≦)つ", "(っ´▽｀)っ♡", "(つ✧ω✧)つ", "(づ｡◕‿‿◕｡)づ", "(っ^_^)っ", "(づ ￣ ³￣)づ"]
  },
  {
    type: "Kaomoji",
    theme: "Worried",
    tags: ["worried", "anxious"],
    items: ["(；ﾟДﾟ)", "( ˃̣̣̥᷄⌓˂̣̣̥᷅ )", "(ಥ﹏ಥ)", "(；一_一)", "(・・;)", "( ˊᵕˋ )", "(；￣Д￣)", "(◎_◎;)", "(＠_＠;)", "(；´д｀)"]
  },
  {
    type: "Kaomoji",
    theme: "Study",
    tags: ["study", "work"],
    items: ["_φ(･_･", "_〆(・∀・)", "_φ(□□ヘ)", "_〆(￣ー￣ )", "(๑•̀ㅂ•́)و✧", "(￣^￣)ゞ", "(・∀・)ノ", "(ง •̀_•́)ง", "(๑•̀ᴗ•́)و", "_φ(ﾟｰﾟ )"]
  },
  {
    type: "Kaomoji",
    theme: "Stop",
    tags: ["stop", "no"],
    items: ["(・｀ω´・)", "(｡•́︿•̀｡)", "(＞人＜;)", "(ノಠ益ಠ)ノ", "(╯︵╰,)", "(ಠ_ಠ)", "(ง'̀-'́)ง", "(￣へ￣)", "(｀△´＋)", "(¬_¬)"]
  },
  {
    type: "Kaomoji",
    theme: "Confused",
    tags: ["confused", "dizzy"],
    items: ["(◎_◎;)", "(＠_＠;)", "(⊙_◎)", "(°ー°〃)", "(・・?)", "(⊙﹏⊙)", "(・・;)", "(⊙.☉)", "(⊙_⊙;)", "(・_・?)"]
  },
  {
    type: "Kaomoji",
    theme: "Crazy",
    tags: ["crazy"],
    items: ["(☉_☉)", "(⊙﹏⊙)", "(°∀°)b", "(ᗒᗣᗕ)՞", "(≧∇≦)", "(⊙ω⊙)", "(☆▽☆)", "(≧▽≦)", "(≧◡≦)", "(✧ω✧)"]
  },
  {
    type: "Kaomoji",
    theme: "Fight",
    tags: ["fight", "challenge"],
    items: ["(ง'̀-'́)ง", "(ง •̀_•́)ง", "( •̀ᴗ•́)و ̑̑", "(╬ಠ益ಠ)", "(ノಠ益ಠ)ノ", "(ง'̀-'́)ง", "(งಠ_ಠ)ง", "(ง •̀_•́)ง", "( •̀ᴗ•́)و", "(ง'̀-'́)ง"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Hearts",
    tags: ["heart", "love"],
    items: ["♡", "♥", "❥", "❣", "ღ", "💕", "💗", "💖", "❤", "❦", "❧", "❥"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Stars",
    tags: ["star", "spark"],
    items: ["✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "⋆", "⭑"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Lines & Frames",
    tags: ["line", "border", "frame"],
    items: ["─", "━", "│", "┃", "┌┐", "└┘", "╭╮", "╰╯", "┏┓", "┗┛", "╔╗", "╚╝"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Dots & Patterns",
    tags: ["dot", "pattern"],
    items: ["•", "·", "∙", "⋆", "⋅", "⋄", "⋯", "⋮", "◦", "∘", "▪", "▫"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Arrows",
    tags: ["arrow"],
    items: ["→", "←", "↑", "↓", "⇢", "⇠", "↗", "↘", "↔", "↕", "⇧", "⇩"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Nature",
    tags: ["nature", "flower"],
    items: ["✿", "❀", "❁", "❃", "❊", "✾", "✽", "✻", "❁", "✿", "❀", "✤"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Music",
    tags: ["music", "note"],
    items: ["♪", "♫", "♬", "♭", "♯", "🎵", "🎶", "𝄞", "𝄢", "♩", "♮", "♭"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Check & X",
    tags: ["check", "x"],
    items: ["✓", "✔", "✗", "✘", "☑", "☒", "✅", "❌", "✖", "✕", "☓", "✘"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Moon & Space",
    tags: ["moon", "space"],
    items: ["☾", "☽", "☀", "☼", "✨", "☄", "✷", "✵", "🌙", "⭐", "🌟", "✺"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Weather",
    tags: ["weather"],
    items: ["☀", "☁", "☂", "☔", "⚡", "❄", "☃", "⛅", "🌧", "🌩", "🌪", "🌤"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Shapes",
    tags: ["shape", "geometry"],
    items: ["■", "□", "▲", "△", "◆", "◇", "●", "○", "◼", "◻", "◉", "◎"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "Brackets",
    tags: ["bracket", "frame"],
    items: ["【】", "『』", "「」", "〈〉", "《》", "〔〕", "()", "[]", "{}", "<>", "⟦⟧", "⟨⟩"]
  },
  {
    type: "ASCII Art",
    theme: "Cat",
    tags: ["cat"],
    items: [
      " /\\_/\\\n( o.o )\n > ^ <",
      " /\\_/\\\n( =^.^=)\n(\" ) (\" )",
      " /\\_/\\\n( o.o )\n  > ^ <",
      " /\\_/\\\n( ^.^ )\n  > ^ <",
      " (=^･ω･^=)",
      " (=^･ｪ･^=)",
      " (=｀ω´=)",
      " (=^‥^=)",
      " (=ＴェＴ=)",
      " (=^･^=)"
    ]
  },
  {
    type: "ASCII Art",
    theme: "Bear",
    tags: ["bear"],
    items: [" ʕ•ᴥ•ʔ", "ʕᵔᴥᵔʔ", " ʕ•̀ ω •́ ʔ", " ʕ •ᴥ•ʔ", " ʕ·ᴥ·ʔ", " ʕ´•ᴥ•`ʔ", " ʕᵔᴥᵔʔ", " ʕ•ᴥ•ʔ", " ʕ·ᴥ·ʔ", " ʕ´•ᴥ•`ʔ"]
  },
  {
    type: "ASCII Art",
    theme: "Rabbit",
    tags: ["rabbit"],
    items: ["(\"(\"", "(\"ᵔㅅᵔ\")", "(\"ᵔ ᵔ\")", "(\"・x・\")", "(\"❛x❛\")", "(\"ᵕᴥᵕ\")", "(\"•ㅅ•\")", "(\"⌒∇⌒\")", "(\"˶ᵔ ᵕ ᵔ˶\")", "(\"｡•ㅅ•｡\")"]
  },
  {
    type: "ASCII Art",
    theme: "Dog",
    tags: ["dog"],
    items: ["/ \__", "(    @\\___", " /         O", "/   (_____ /", "/_____/   U", "U・ᴥ・U", "(ᵔᴥᵔ)", "(U・ᴥ・U)", "/\_/\\\n( o.o )\n > ^ <", "(❍ᴥ❍)ʋ"]
  },
  {
    type: "ASCII Art",
    theme: "Heart",
    tags: ["heart", "ascii"],
    items: [" .:::.   .:::.", ":::::..:::::", " ::::::::::", "  ':::::'", "    ':'", "  **   **", " ******", "  ****", "   **", "    *"]
  },
  {
    type: "ASCII Art",
    theme: "Small Star",
    tags: ["star", "ascii"],
    items: [
      "  *  \n *** \n*****\n *** \n  *",
      "  .  \n .*. \n*****\n .*. \n  .",
      "  +  \n +++ \n+++++\n +++ \n  +"
    ]
  },
  {
    type: "ASCII Art",
    theme: "Face",
    tags: ["face"],
    items: [":-)", ":-D", ":-P", ":-O", ":-o", ";-)", "^_^", "T_T", "-_-", "0_0"]
  },
  {
    type: "ASCII Art",
    theme: "Kirby",
    tags: ["kirby"],
    items: ["(っ◕‿◕)っ", "(｡◕‿◕｡)", "(◕‿◕✿)", "(づ｡◕‿‿◕｡)づ", "(✿◕‿◕)", "(◕‿◕)", "(ღ˘⌣˘ღ)", "(◕ᴗ◕✿)", "(◕‿◕)ﾉ", "(◕‿◕)♡"]
  },
  {
    type: "ASCII Art",
    theme: "Box Art",
    tags: ["box", "frame"],
    items: ["┌────┐\n│    │\n└────┘", "╔════╗\n║    ║\n╚════╝", "┏━━━━┓\n┃    ┃\n┗━━━━┛", "┌─┐\n│ │\n└─┘", "╭────╮\n│    │\n╰────╯"]
  },
  {
    type: "ASCII Art",
    theme: "Cloud",
    tags: ["cloud"],
    items: ["     .--.", "  .-(    ).", " (___.__)__)", " (  .-.  )", "(__(   )__)", "(    )", "(____)", " .--. ", "(    )", " '--' "]
  },
  {
    type: "ASCII Art",
    theme: "Tree",
    tags: ["tree"],
    items: ["  /\\", " /**\\", "/**o*\\", "  ||", "  ||", "  ||", "  ||", "  /\\\\", " /\\\\\\", "   ||"]
  }
];

const symbolBlocks = [
  { id: "all", label: "All" },
  { id: "box", label: "Lines & Frames", ranges: [[0x2500, 0x257f]] },
  { id: "arrows", label: "Arrows", ranges: [[0x2190, 0x21ff]] },
  { id: "geom", label: "Shapes", ranges: [[0x25a0, 0x25ff]] },
  { id: "dingbats", label: "Decorative", ranges: [[0x2700, 0x27bf]] },
  { id: "misc", label: "Misc", ranges: [[0x2600, 0x26ff]] }
];

const typeTabs = document.getElementById("typeTabs");
const themeChips = document.getElementById("themeChips");
const resultGrid = document.getElementById("resultGrid");
const resultMeta = document.getElementById("resultMeta");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");
const recentList = document.getElementById("recentList");
const symbolExplorer = document.getElementById("symbolExplorer");
const symbolGrid = document.getElementById("symbolGrid");
const symbolMeta = document.getElementById("symbolMeta");
const blockTabs = document.getElementById("blockTabs");
const dailyPick = document.getElementById("dailyPick");

const types = ["All", "Kaomoji", "Aesthetic Symbols", "ASCII Art"];
let activeType = "All";
let activeTheme = "All";
let activeBlock = "all";

const RECENT_KEY = "recent-items";
const MAX_RECENT = 10;
let recentItems = [];

function normalize(text) {
  return text.toLowerCase();
}

function createTab(label, isActive, onClick) {
  const button = document.createElement("button");
  button.className = "tab" + (isActive ? " active" : "");
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function createChip(label, isActive, onClick) {
  const button = document.createElement("button");
  button.className = "chip" + (isActive ? " active" : "");
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function createSymbolTab(label, isActive, onClick) {
  const button = document.createElement("button");
  button.className = "symbol-tab" + (isActive ? " active" : "");
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function showToast(message = "Copied!") {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1200);
}

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => showToast(message)).catch(() => {
    showToast(message);
  });
  addRecentItem(text);
}

function addRecentItem(text) {
  if (!text) return;
  recentItems = [text, ...recentItems.filter((item) => item !== text)].slice(0, MAX_RECENT);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recentItems));
  renderRecent();
}

function renderRecent() {
  recentList.innerHTML = "";
  if (recentItems.length === 0) return;

  const label = document.createElement("div");
  label.className = "recent__label";
  label.textContent = "Recently copied";
  recentList.appendChild(label);

  recentItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recent__item";
    button.textContent = item;
    button.addEventListener("click", () => copyToClipboard(item, "Copied!"));
    recentList.appendChild(button);
  });
}

function matchesTheme(entry) {
  return activeTheme === "All" || entry.theme === activeTheme;
}

function buildSymbolCatalog() {
  const catalog = [];
  symbolBlocks.forEach((block) => {
    if (!block.ranges) return;
    block.ranges.forEach(([start, end]) => {
      for (let code = start; code <= end; code += 1) {
        const char = String.fromCodePoint(code);
        catalog.push({
          char,
          code,
          block: block.id,
          label: block.label
        });
      }
    });
  });
  return catalog;
}

const symbolCatalog = buildSymbolCatalog();

function formatCode(code) {
  return `U+${code.toString(16).toUpperCase().padStart(4, "0")}`;
}

function renderTabs() {
  typeTabs.innerHTML = "";
  types.forEach((label) => {
    const button = createTab(label, label === activeType, () => {
      activeType = label === activeType ? "All" : label;
      activeTheme = "All";
      render();
    });
    typeTabs.appendChild(button);
  });
}

function renderThemeChips(filteredData) {
  const themes = ["All", ...new Set(filteredData.map((entry) => entry.theme))];
  themeChips.innerHTML = "";
  themes.forEach((label) => {
    const button = createChip(label, label === activeTheme, () => {
      activeTheme = label === activeTheme ? "All" : label;
      render();
    });
    themeChips.appendChild(button);
  });
}

function renderSymbolTabs() {
  blockTabs.innerHTML = "";
  symbolBlocks.forEach((block) => {
    const button = createSymbolTab(block.label, block.id === activeBlock, () => {
      activeBlock = block.id === activeBlock ? "all" : block.id;
      renderSymbolExplorer();
    });
    blockTabs.appendChild(button);
  });
}

function renderSymbolExplorer() {
  let filtered = symbolCatalog;
  if (activeBlock !== "all") {
    filtered = filtered.filter((item) => item.block === activeBlock);
  }

  symbolGrid.innerHTML = "";
  filtered.slice(0, 320).forEach((item) => {
    const card = document.createElement("div");
    card.className = "symbol-item";

    const char = document.createElement("div");
    char.className = "symbol-item__char";
    char.textContent = item.char;

    const code = document.createElement("div");
    code.className = "symbol-item__code";
    code.textContent = formatCode(item.code);

    card.appendChild(char);
    card.appendChild(code);

    card.addEventListener("click", () => copyToClipboard(item.char, "Copied!"));
    symbolGrid.appendChild(card);
  });

  const displayCount = Math.min(filtered.length, 320);
  symbolMeta.textContent = `Showing ${displayCount} of ${filtered.length} symbols`;
}

function renderEmojiGrid(filtered) {
  resultGrid.innerHTML = "";
  filtered.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card__header";

    const type = document.createElement("div");
    type.className = "card__type";
    type.textContent = entry.type;

    const theme = document.createElement("div");
    theme.className = "card__theme";
    theme.textContent = entry.theme;

    header.appendChild(type);
    header.appendChild(theme);

    const items = document.createElement("div");
    items.className = "items";

    entry.items.forEach((itemText) => {
      const item = document.createElement("div");
      item.className = "item";

      const text = document.createElement("div");
      text.className = entry.type === "ASCII Art" ? "ascii" : "item__text";
      text.textContent = itemText;

      const hint = document.createElement("div");
      hint.className = "item__hint";
      hint.textContent = "Click to copy";

      item.appendChild(text);
      if (entry.type !== "ASCII Art") {
        item.appendChild(hint);
      }

      item.addEventListener("click", () => copyToClipboard(itemText, "Copied!"));
      items.appendChild(item);
    });

    card.appendChild(header);
    card.appendChild(items);

    resultGrid.appendChild(card);
  });
}

function setDailyPick() {
  const allItems = data.flatMap((entry) => entry.items);
  if (allItems.length === 0) return;

  const today = new Date();
  const seed = today.getUTCFullYear() * 1000 + today.getUTCDate();
  const index = seed % allItems.length;
  dailyPick.textContent = allItems[index];
}

function render() {
  renderTabs();

  const byType = activeType === "All"
    ? data
    : data.filter((entry) => entry.type === activeType);

  renderThemeChips(byType);

  const filtered = byType.filter((entry) => matchesTheme(entry));

  renderEmojiGrid(filtered);

  resultMeta.textContent = `Showing ${filtered.length} themes in ${activeType === "All" ? "all types" : activeType}`;

  renderSymbolTabs();
  renderSymbolExplorer();

  symbolExplorer.style.display =
    activeType === "All" || activeType === "Aesthetic Symbols" ? "block" : "none";
}

function setTheme(mode) {
  const isDark = mode === "dark";
  document.body.classList.toggle("theme-dark", isDark);
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("theme") || "light";
const savedRecent = localStorage.getItem(RECENT_KEY);
if (savedRecent) {
  try {
    recentItems = JSON.parse(savedRecent) || [];
  } catch {
    recentItems = [];
  }
}

setTheme(savedTheme);
renderRecent();
setDailyPick();
render();
