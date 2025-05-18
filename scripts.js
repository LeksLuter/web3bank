// Объект переводов
const translations = {
  en: {
    "header-title": "Web3 Bank",
    "header-subtitle": "Your Gateway to the Funniest Decentralized Future!",
    "nav-home": "Home",
    "nav-why": "Why Us",
    "nav-tokenomics": "Tokenomics",
    "nav-use-cases": "Use Cases",
    "nav-roadmap": "Roadmap",
    "nav-listings": "Listings",
    "nav-partners": "Partners",
    "welcome-title": "Welcome to Web3 Bank",
    "welcome-text": "🔥 Welcome to Web3 Bank — Where Memes Meet Money! Say goodbye to boring finance! Join a decentralized community where every meme you create or share can earn you WTB tokens. Powered by blockchain, we turn laughter into real value. Start your journey today — earn, vote, and build the future of meme-driven finance with us!",
    "why-title": "Why Web3 Bank?",
    "why-list": [
      "Earn While You Meme: Get rewarded with WTB tokens for every viral meme you share.",
      "Shape the Future: Vote on platform upgrades and meme contests with your tokens.",
      "Exclusive NFT Drops: Unlock limited-edition memes that can’t be found anywhere else.",
      "Community-Driven: Join 10,000+ memers building a decentralized economy together.",
      "Secure & Transparent: Built on blockchain — no hidden fees, no middlemen."
    ],
    "tokenomics-title": "Tokenomics",
    "tokenomics-text": "Our tokenomics are designed to ensure fairness, sustainability, and long-term growth for our community. Join us and become part of the decentralized future!",
    "use-cases-title": "Token Use Cases",
    "listings-title": "Token Listings",
    "partners-title": "Our Partners",
    "roadmap-title": "Roadmap",
    "how-title": "How It Works",
    "how-text": "1. Create your Web3 wallet.<br>2. Mint or trade WTB meme tokens.<br>3. Vote on the best memes to govern the platform.<br>4. Laugh your way to the top of the leaderboard!",
    "visit-counter": "Visits: {count}",
    "analytics-link": "View Analytics",
    "auth-title": "Sign In",
    "connect-fantom": "Connect with Fantom Wallet"
  },
  ru: {
    "header-title": "Web3 Банк",
    "header-subtitle": "Ваш путь к самому веселому децентрализованному будущему!",
    "nav-home": "Главная",
    "nav-why": "Почему мы",
    "nav-tokenomics": "Токеномика",
    "nav-use-cases": "Применение",
    "nav-roadmap": "Дорожная карта",
    "nav-listings": "Листинги",
    "nav-partners": "Партнеры",
    "welcome-title": "Добро пожаловать в Web3 Bank",
    "welcome-text": "🔥 Добро пожаловать в Web3 Bank — где мемы встречаются с деньгами! Забудьте о скучных финансах! Присоединяйтесь к децентрализованному сообществу, где каждый мем, который вы создаете или делитесь, приносит токены WTB. На основе блокчейна мы превращаем смех в реальную ценность. Начните свой путь сегодня — зарабатывайте, голосуйте и создавайте будущее мем-экономики вместе с нами!",
    "why-title": "Почему Web3 Банк?",
    "why-list": [
      "Зарабатывай, веселясь: Получайте токены WTB за каждый вирусный мем.",
      "Управляйте платформой: Голосуйте за обновления и конкурсы мемов с помощью токенов.",
      "Эксклюзивные NFT: Получайте доступ к уникальным мемам, которых нет больше нигде.",
      "Сообщество из 10,000+ мемеров: Вместе создаем децентрализованную экономику.",
      "Безопасность блокчейна: Никаких скрытых комиссий и посредников."
    ],
    "tokenomics-title": "Токеномика",
    "tokenomics-text": "Наша токеномика разработана для обеспечения справедливости, устойчивости и долгосрочного роста для нашего сообщества. Присоединяйтесь к нам и станьте частью децентрализованного будущего!",
    "use-cases-title": "Применение токена",
    "listings-title": "Листинги токена",
    "partners-title": "Наши партнеры",
    "roadmap-title": "Дорожная карта",
    "how-title": "Как это работает",
    "how-text": "1. Создайте свой Web3 кошелек.<br>2. Чеканьте или торгуйте токенами WTB.<br>3. Голосуйте за лучшие мемы для управления платформой.<br>4. Смейтесь до вершины лидерборда!",
    "visit-counter": "Посещения: {count}",
    "analytics-link": "Посмотреть аналитику",
    "auth-title": "Войти",
    "connect-fantom": "Подключить Fantom Wallet"
  }
};

let currentLanguage = "en";

// Переключение языка
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "ru" : "en";

  // Обновление флага
  const flag = document.getElementById("language-flag");
  flag.src = currentLanguage === "en"
    ? "img/usa-flag.svg"
    : "img/russia-flag.svg";

  // Обновление всех элементов
  Object.keys(translations[currentLanguage]).forEach(key => {
    const element = document.getElementById(key);
    if (element) element.textContent = translations[currentLanguage][key];
  });

  // Обновление списков
  const whyList = document.getElementById("why-list");
  whyList.innerHTML = translations[currentLanguage]["why-list"]
    .map(item => `<li>${item}</li>`)
    .join("");

  const useCases = translations[currentLanguage]["use-cases-items"];
  const useCaseElements = document.querySelectorAll(".use-case-card h3, .use-case-card p");
  useCaseElements.forEach((el, index) => {
    el.textContent = useCases[index];
  });

  const listings = translations[currentLanguage]["listings-items"];
  const listingElements = document.querySelectorAll(".exchange-card p");
  listingElements.forEach((el, index) => {
    el.textContent = listings[index];
  });

  const roadmapItems = translations[currentLanguage]["roadmap-items"];
  document.querySelectorAll(".roadmap-item p").forEach((el, index) => {
    el.textContent = roadmapItems[index];
  });

  // Обновление счетчика
  const visits = localStorage.getItem("visits") || 0;
  const counterText = translations[currentLanguage]["visit-counter"].replace("{count}", visits);
  document.getElementById("visit-counter").textContent = counterText;
}

// Меню
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");

  // Закрытие меню при клике на ссылку (мобильные)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navbar.classList.remove("active");
      }
    });
  });
}

// Авторизация
let loggedInUser = null;

function showModal() {
  document.getElementById("auth-modal").classList.remove("hidden");
  document.getElementById("modal-overlay").classList.remove("hidden");
}

function hideModal() {
  document.getElementById("auth-modal").classList.add("hidden");
  document.getElementById("modal-overlay").classList.add("hidden");
}

// Подключение Fantom Wallet
async function connectFantom() {
  if (window.fantom) {
    const accounts = await window.fantom.enable();
    alert(`Connected: ${accounts[0]}`);
    hideModal();
  } else {
    alert("Fantom Wallet не обнаружен!");
  }
}

// Админ-панель
const adminPassword = "web3bank2025";
const quests = localStorage.getItem("quests")
  ? JSON.parse(localStorage.getItem("quests"))
  : [];

function adminLogin() {
  const pass = document.getElementById("admin-pass").value;
  if (pass === adminPassword) {
    document.getElementById("admin-panel").classList.remove("hidden");
    document.getElementById("admin-pass").classList.add("hidden");
  }
}

function logoutAdmin() {
  document.getElementById("admin-panel").classList.add("hidden");
  document.getElementById("admin-pass").classList.remove("hidden");
}

// Квесты
function login() {
  const wallet = document.getElementById("wallet-address").value;
  if (!wallet) return alert("Введите адрес кошелька!");
  loggedInUser = { wallet, tasks: [] };
  updateUserInfo();
  hideModal();
}

function updateUserInfo() {
  const userCard = document.querySelector(".user-card");
  if (userCard) {
    userCard.classList.remove("hidden");
    document.getElementById("user-wallet").textContent = loggedInUser.wallet;
    document.getElementById("tasks-completed").textContent = loggedInUser.tasks.length;
  }
}

function addQuest() {
  const title = document.getElementById("new-quest-title").value;
  const points = document.getElementById("new-quest-points").value;
  if (!title || !points) return alert("Заполните все поля!");
  quests.push({ title, points });
  localStorage.setItem("quests", JSON.stringify(quests));
  alert("Задание добавлено!");
}

function loadQuests() {
  const questsList = document.getElementById("quests-list");
  quests.forEach(quest => {
    const item = `
      <details>
        <summary>${quest.title}</summary>
        <p>Очки: ${quest.points}</p>
        <button onclick="completeQuest('${quest.title}')">Выполнить</button>
      </details>
    `;
    questsList.innerHTML += item;
  });
}
loadQuests();

function completeQuest(title) {
  if (!loggedInUser) return alert("Авторизуйтесь!");
  loggedInUser.tasks.push(title);
  updateUserInfo();
}

// Счетчик посещений
function updateVisitCounter() {
  let visits = localStorage.getItem("visits");
  visits = visits ? parseInt(visits) + 1 : 1;
  localStorage.setItem("visits", visits);
  const counterText = translations[currentLanguage]["visit-counter"].replace("{count}", visits);
  document.getElementById("visit-counter").textContent = counterText;
}
updateVisitCounter();

// Закрытие модального окна при клике на оверлей
document.getElementById("modal-overlay").addEventListener("click", hideModal);
