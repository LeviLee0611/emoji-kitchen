const data = [
  {
    type: "Kaomoji",
    theme: "행복",
    tags: ["happy", "행복", "웃음"],
    items: ["(*^▽^*)", "(＾▽＾)", "ヽ(•‿•)ノ", "(*¯︶¯*)", "(*^‿^*)", "(｡♥‿♥｡)"]
  },
  {
    type: "Kaomoji",
    theme: "생각중",
    tags: ["thinking", "생각", "음"],
    items: ["(￢_￢)", "(・_・ヾ", "(￣～￣;)", "(•ᴗ•?)", "(￣_￣ )", "(・_・?)"]
  },
  {
    type: "Kaomoji",
    theme: "신남",
    tags: ["excited", "신남", "야호"],
    items: ["٩(ˊᗜˋ*)و", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "(≧▽≦)", "＼(＾▽＾)／", "(๑˃̵ᴗ˂̵)و", "ᕕ( ᐛ )ᕗ"]
  },
  {
    type: "Kaomoji",
    theme: "부탁",
    tags: ["please", "부탁", "제발"],
    items: ["(。-人-。)", "(ㅅ´ ˘ `)", "(。•́︿•̀。)", "( •́ ᵕ •̀ )", "(人´∀｀)｡ﾟ+", "(๑´ㅂ`๑)"]
  },
  {
    type: "Kaomoji",
    theme: "비정상",
    tags: ["weird", "비정상", "혼란"],
    items: ["(⊙＿⊙')", "(°ロ°) !", "(⊙_☉)", "(ಠ_ಠ)", "(╯°□°）╯︵ ┻━┻", "(⊙ω⊙)"]
  },
  {
    type: "Kaomoji",
    theme: "윙크",
    tags: ["wink", "윙크"],
    items: ["(^_~)", "(・ω<)", "(ˆ◡ˆ)~", "(^.~)", "(￣▽－)☆", "(•‿-)"]
  },
  {
    type: "Kaomoji",
    theme: "인사",
    tags: ["hello", "안녕", "인사"],
    items: ["(｡•‿•｡)ﾉ", "(￣▽￣)ノ", "( ´ ▽ ` )ﾉ", "( ^_^)／", "(っ´▽｀)っ", "(＾◇＾)ノ"]
  },
  {
    type: "Kaomoji",
    theme: "충성",
    tags: ["salute", "충성", "경례"],
    items: ["(￣^￣)ゞ", "(｀_´)ゞ", "(￣-￣)ゞ", "(・_・)ゞ", "(｀・ω・´)ゞ", "(￣^￣ゞ)"]
  },
  {
    type: "Kaomoji",
    theme: "공포",
    tags: ["fear", "공포", "무서움"],
    items: ["(°ロ°)☝", "(⊙︿⊙)", "( ;ﾟДﾟ)", "(ㆆ_ㆆ)", "(╥﹏╥)", "(；゜ロ゜)"]
  },
  {
    type: "Kaomoji",
    theme: "슬픔",
    tags: ["sad", "슬픔", "우울"],
    items: ["(；＿；)", "(╯︵╰,)", "(ಥ﹏ಥ)", "(｡•́︿•̀｡)", "(っ- ‸ - ς)", "(T_T)"]
  },
  {
    type: "Kaomoji",
    theme: "감사",
    tags: ["thanks", "감사", "고마워"],
    items: ["(人´∀｀).☆.。.", "(｡•ㅅ•｡)♡", "( •̀ ω •́ )✧", "(⁎˃ ᵕ ˂⁎)", "(≧∇≦)b", "(人´▽`*)"]
  },
  {
    type: "Kaomoji",
    theme: "화남",
    tags: ["angry", "화남", "짜증"],
    items: ["(＃`Д´)", "(╬ಠ益ಠ)", "(ꐦ°᷄д°᷅)", "(¬_¬)", "(ง'̀-'́)ง", "(•̀ᴗ•́)و ̑̑"]
  },
  {
    type: "Kaomoji",
    theme: "사랑",
    tags: ["love", "사랑", "하트"],
    items: ["(｡♥‿♥｡)", "(っ˘з(˘⌣˘ )", "(ღ˘⌣˘ღ)", "(˘³˘)♥", "(づ￣ ³￣)づ", "(っ´▽｀)っ♡"]
  },
  {
    type: "Kaomoji",
    theme: "배고픔",
    tags: ["hungry", "배고픔", "먹고싶다"],
    items: ["(๑>﹏<๑)", "(๑´ڡ`๑)", "(っ˘ڡ˘ς)", "(๑•́ ₃ •̀๑)", "(๑´ㅁ`๑)", "(๑¯﹃¯๑)"]
  },
  {
    type: "Kaomoji",
    theme: "졸림",
    tags: ["sleep", "졸림", "피곤"],
    items: ["(－_－) zzZ", "(￣o￣) . z Z", "(ᴗ˳ᴗ)", "(u_u)zzZ", "(－.－)...", "(￣﹃￣)"]
  },
  {
    type: "Kaomoji",
    theme: "놀람",
    tags: ["surprise", "놀람", "헉"],
    items: ["(⊙o⊙)", "(ﾟﾛﾟ)", "(☉_☉)", "Σ(°△°|||)", "(◎_◎;)", "(°ー°〃)"]
  },
  {
    type: "Kaomoji",
    theme: "응원",
    tags: ["cheer", "응원", "화이팅"],
    items: ["(๑•̀ㅂ•́)و✧", "(ง •̀_•́)ง", "٩(๑`^´๑)۶", "(๑•̀ㅁ•́)و", "(๑•̀ㅂ•́)و", "(๑˃̵ᴗ˂̵)و"]
  },
  {
    type: "Kaomoji",
    theme: "포옹",
    tags: ["hug", "포옹", "안아줘"],
    items: ["(っ´▽｀)っ", "(づ｡◕‿‿◕｡)づ", "(っ•̀ω•́)っ", "(づ￣ ³￣)づ", "(つ≧▽≦)つ", "(っ´▽｀)っ♡"]
  },
  {
    type: "Kaomoji",
    theme: "걱정",
    tags: ["worry", "걱정", "불안"],
    items: ["(；ﾟДﾟ)", "( ˃̣̣̥᷄⌓˂̣̣̥᷅ )", "(ಥ﹏ಥ)", "(；一_一)", "(・・;)", "( ˊᵕˋ )"]
  },
  {
    type: "Kaomoji",
    theme: "공부",
    tags: ["study", "공부", "열공"],
    items: ["_φ(･_･", "_〆(・∀・)", "_φ(□□ヘ)", "_〆(￣ー￣ )", "(๑•̀ㅂ•́)و✧", "(￣^￣)ゞ"]
  },
  {
    type: "Kaomoji",
    theme: "하지마",
    tags: ["stop", "하지마", "그만"],
    items: ["(・｀ω´・)", "(｡•́︿•̀｡)", "(＞人＜;)", "(ノಠ益ಠ)ノ", "(╯︵╰,)", "(ಠ_ಠ)"]
  },
  {
    type: "Kaomoji",
    theme: "혼란",
    tags: ["confused", "혼란", "어지러움"],
    items: ["(◎_◎;)", "(＠_＠;)", "(⊙_◎)", "(°ー°〃)", "(・・?)", "(⊙﹏⊙)"]
  },
  {
    type: "Kaomoji",
    theme: "비정상",
    tags: ["crazy", "미쳤다", "비정상"],
    items: ["(☉_☉)", "(⊙﹏⊙)", "(°∀°)b", "(ᗒᗣᗕ)՞", "(≧∇≦)", "(⊙ω⊙)"]
  },
  {
    type: "Kaomoji",
    theme: "싸울래요",
    tags: ["fight", "싸울래요", "도전"],
    items: ["(ง'̀-'́)ง", "(ง •̀_•́)ง", "( •̀ᴗ•́)و ̑̑", "(╬ಠ益ಠ)", "(ノಠ益ಠ)ノ", "(ง'̀-'́)ง"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "하트",
    tags: ["heart", "하트", "love"],
    items: ["♡", "♥", "❥", "❣", "ღ", "💕", "💗", "💖"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "별",
    tags: ["star", "별", "spark"],
    items: ["✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "라인/테두리",
    tags: ["line", "border", "frame", "라인", "테두리"],
    items: ["─", "━", "│", "┃", "┌┐", "└┘", "╭╮", "╰╯"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "점/패턴",
    tags: ["dot", "pattern", "점"],
    items: ["•", "·", "∙", "⋆", "⋅", "⋄", "⋯", "⋮"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "화살표",
    tags: ["arrow", "화살표"],
    items: ["→", "←", "↑", "↓", "⇢", "⇠", "↗", "↘"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "자연",
    tags: ["nature", "flower", "자연"],
    items: ["✿", "❀", "❁", "❃", "❊", "✾", "✽", "✻"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "음악",
    tags: ["music", "음악", "노래"],
    items: ["♪", "♫", "♬", "♭", "♯", "🎵", "🎶", "𝄞"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "체크/엑스",
    tags: ["check", "x", "체크"],
    items: ["✓", "✔", "✗", "✘", "☑", "☒", "✅", "❌"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "달/우주",
    tags: ["moon", "space", "달"],
    items: ["☾", "☽", "☀", "☼", "✨", "☄", "✷", "✵"]
  },
  {
    type: "Aesthetic Symbols",
    theme: "날씨",
    tags: ["weather", "날씨", "비"],
    items: ["☀", "☁", "☂", "☔", "⚡", "❄", "☃", "⛅"]
  },
  {
    type: "ASCII Art",
    theme: "고양이",
    tags: ["cat", "냥", "고양이"],
    items: [
      " /\\_/\\\n( o.o )\n > ^ <",
      " /\\_/\\\n( =^.^=)\n(\" ) (\" )"
    ]
  },
  {
    type: "ASCII Art",
    theme: "곰",
    tags: ["bear", "곰"],
    items: [" ʕ•ᴥ•ʔ", "ʕᵔᴥᵔʔ", " ʕ•̀ ω •́ ʔ"]
  },
  {
    type: "ASCII Art",
    theme: "토끼",
    tags: ["rabbit", "토끼"],
    items: ["(\"(\"", "(\"ᵔㅅᵔ\")", "(\"ᵔ ᵔ\")"]
  },
  {
    type: "ASCII Art",
    theme: "하트",
    tags: ["heart", "하트", "ascii"],
    items: [" .:::.   .:::.", ":::::..:::::", " ::::::::::", "  ':::::'", "    ':'"]
  },
  {
    type: "ASCII Art",
    theme: "작은 별",
    tags: ["star", "별", "ascii"],
    items: [
      "  *  \n *** \n*****\n *** \n  *",
      "  .  \n .*. \n*****\n .*. \n  ."
    ]
  }
];

const symbolBlocks = [
  {
    id: "all",
    label: "전체 블록",
    keywords: ["전체", "모든"]
  },
  {
    id: "box",
    label: "라인/테두리",
    ranges: [[0x2500, 0x257f]],
    keywords: ["라인", "테두리", "박스", "border"]
  },
  {
    id: "arrows",
    label: "화살표",
    ranges: [[0x2190, 0x21ff]],
    keywords: ["화살표", "arrow"]
  },
  {
    id: "geom",
    label: "도형",
    ranges: [[0x25a0, 0x25ff]],
    keywords: ["도형", "shape", "네모", "세모", "원"]
  },
  {
    id: "dingbats",
    label: "장식 기호",
    ranges: [[0x2700, 0x27bf]],
    keywords: ["기호", "장식", "별", "체크"]
  },
  {
    id: "misc",
    label: "기타 기호",
    ranges: [[0x2600, 0x26ff]],
    keywords: ["기타", "날씨", "음악", "기호"]
  }
];

const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const typeList = document.getElementById("typeList");
const themeList = document.getElementById("themeList");
const blockList = document.getElementById("blockList");
const resultGrid = document.getElementById("resultGrid");
const resultMeta = document.getElementById("resultMeta");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");
const recentList = document.getElementById("recentList");
const symbolExplorer = document.getElementById("symbolExplorer");
const symbolSearch = document.getElementById("symbolSearch");
const symbolGrid = document.getElementById("symbolGrid");
const symbolMeta = document.getElementById("symbolMeta");
const filterBar = document.getElementById("filterBar");
const clearFilters = document.getElementById("clearFilters");

const types = ["전체", "Kaomoji", "Aesthetic Symbols", "ASCII Art"];
let activeType = "전체";
let activeTheme = "전체";
let activeBlock = "all";

const RECENT_KEY = "recent-items";
const MAX_RECENT = 10;
let recentItems = [];

function normalize(text) {
  return text.toLowerCase();
}

function createSideItem(label, isActive, count, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "side-item" + (isActive ? " active" : "");
  button.textContent = label;
  if (typeof count === "number") {
    const badge = document.createElement("span");
    badge.className = "side-item__count";
    badge.textContent = count;
    button.appendChild(badge);
  }
  button.addEventListener("click", onClick);
  return button;
}

function showToast(message = "복사 완료!") {
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
  label.textContent = "최근 복사";
  recentList.appendChild(label);

  recentItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recent__item";
    button.textContent = item;
    button.addEventListener("click", () => copyToClipboard(item, "최근 항목 복사 완료!"));
    recentList.appendChild(button);
  });
}

function matchesSearch(entry, term) {
  if (!term) return true;
  const combined = [entry.type, entry.theme, ...entry.tags, ...entry.items].join(" ");
  return normalize(combined).includes(term);
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
          label: block.label,
          keywords: block.keywords || []
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

function renderFilterBar({ emojiCount, symbolCount }) {
  filterBar.innerHTML = "";
  const filters = [];

  if (activeType !== "전체") filters.push(`유형: ${activeType}`);
  if (activeTheme !== "전체") filters.push(`테마: ${activeTheme}`);
  if (activeBlock !== "all") {
    const block = symbolBlocks.find((item) => item.id === activeBlock);
    filters.push(`문자표: ${block ? block.label : "선택됨"}`);
  }

  const searchValue = searchInput.value.trim();
  if (searchValue) filters.push(`검색어: ${searchValue}`);

  if (filters.length === 0) {
    filters.push("필터 없음");
  }

  filters.forEach((text) => {
    const pill = document.createElement("div");
    pill.className = "filter-pill";
    pill.textContent = text;
    filterBar.appendChild(pill);
  });

  resultMeta.textContent = `이모지 ${emojiCount}개 · 문자 ${symbolCount}개`;
}

function renderTypeList() {
  typeList.innerHTML = "";
  types.forEach((type) => {
    const count = type === "전체"
      ? data.length
      : data.filter((entry) => entry.type === type).length;
    const button = createSideItem(type, type === activeType, count, () => {
      activeType = type;
      activeTheme = "전체";
      render();
    });
    typeList.appendChild(button);
  });
}

function renderThemeList(filteredData) {
  themeList.innerHTML = "";
  const themes = ["전체", ...new Set(filteredData.map((entry) => entry.theme))];
  themes.forEach((theme) => {
    const count = theme === "전체"
      ? filteredData.length
      : filteredData.filter((entry) => entry.theme === theme).length;
    const button = createSideItem(theme, theme === activeTheme, count, () => {
      activeTheme = theme;
      render();
    });
    themeList.appendChild(button);
  });
}

function renderBlockList() {
  blockList.innerHTML = "";
  symbolBlocks.forEach((block) => {
    const count = block.ranges
      ? block.ranges.reduce((sum, [start, end]) => sum + (end - start + 1), 0)
      : symbolCatalog.length;
    const button = createSideItem(block.label, block.id === activeBlock, count, () => {
      activeBlock = block.id;
      symbolExplorer.scrollIntoView({ behavior: "smooth", block: "start" });
      renderSymbolExplorer();
      renderFilterBar({ emojiCount: lastEmojiCount, symbolCount: lastSymbolCount });
    });
    blockList.appendChild(button);
  });
}

function renderSymbolExplorer() {
  const searchValue = normalize(symbolSearch.value.trim()) || normalize(searchInput.value.trim());

  let filtered = symbolCatalog;

  if (activeBlock !== "all") {
    filtered = filtered.filter((item) => item.block === activeBlock);
  }

  if (searchValue) {
    filtered = filtered.filter((item) =>
      item.char.includes(searchValue) ||
      item.label.toLowerCase().includes(searchValue) ||
      item.keywords.some((keyword) => keyword.toLowerCase().includes(searchValue))
    );
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

    card.addEventListener("click", () => copyToClipboard(item.char, `${item.char} 복사 완료!`));
    symbolGrid.appendChild(card);
  });

  const displayCount = Math.min(filtered.length, 320);
  symbolMeta.textContent = `총 ${filtered.length}개 중 ${displayCount}개 표시`;
  lastSymbolCount = filtered.length;
}

let lastEmojiCount = data.length;
let lastSymbolCount = symbolCatalog.length;

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
      hint.textContent = "클릭해서 복사";

      item.appendChild(text);
      if (entry.type !== "ASCII Art") {
        item.appendChild(hint);
      }

      item.addEventListener("click", () => copyToClipboard(itemText));
      items.appendChild(item);
    });

    card.appendChild(header);
    card.appendChild(items);

    resultGrid.appendChild(card);
  });
}

function render() {
  const term = normalize(searchInput.value.trim());

  renderTypeList();

  const byType = activeType === "전체"
    ? data
    : data.filter((entry) => entry.type === activeType);

  renderThemeList(byType);

  const filtered = byType.filter((entry) => {
    const themeMatch = activeTheme === "전체" || entry.theme === activeTheme;
    return themeMatch && matchesSearch(entry, term);
  });

  lastEmojiCount = filtered.length;

  renderEmojiGrid(filtered);
  renderSymbolExplorer();
  renderBlockList();
  renderFilterBar({ emojiCount: lastEmojiCount, symbolCount: lastSymbolCount });

  symbolExplorer.style.display =
    activeType === "전체" || activeType === "Aesthetic Symbols" ? "block" : "none";
}

function setTheme(mode) {
  const isDark = mode === "dark";
  document.body.classList.toggle("theme-dark", isDark);
  themeToggle.textContent = isDark ? "라이트모드" : "다크모드";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

searchInput.addEventListener("input", () => {
  if (!symbolSearch.value.trim()) {
    symbolSearch.value = searchInput.value;
  }
  render();
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  symbolSearch.value = "";
  render();
});

clearFilters.addEventListener("click", () => {
  activeType = "전체";
  activeTheme = "전체";
  activeBlock = "all";
  searchInput.value = "";
  symbolSearch.value = "";
  render();
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("theme-dark");
  setTheme(isDark ? "light" : "dark");
});

symbolSearch.addEventListener("input", renderSymbolExplorer);

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
render();
