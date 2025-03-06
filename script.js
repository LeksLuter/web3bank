const translations = {
  en: {
    "header-title": "Web3 Bank",
    "header-subtitle": "Your Gateway to the Funniest Decentralized Future!",
    "welcome-title": "Welcome to Web3 Bank",
    "welcome-text": "We're not just a bank; we're a crypto-mem adventure! At Web3 Bank, we combine the power of blockchain with the hilarity of internet culture. Get ready to laugh, earn, and meme your way to financial freedom.",
    "why-title": "Why Web3 Bank?",
    "why-list": [
      "Earn tokens by sharing memes",
      "Participate in meme-based governance",
      "Access exclusive NFT memes",
      "Join the funniest community on the blockchain"
    ],
    "tokenomics-title": "Tokenomics",
    "tokenomics-text": "Our tokenomics are designed to ensure fairness, sustainability, and long-term growth for our community. Join us and become part of the decentralized future!",
    "roadmap-title": "Roadmap",
    "roadmap-items": [
      "Launch W3B token on MMM platform",
      "Listing on decentralized exchanges (DEX)",
      "Listing on CoinGecko, CoinMarketCap",
      "Global marketing campaign",
      "Migration to multiple blockchains",
      "Development of Web3 Bank ecosystem projects"
    ],
    "how-title": "How It Works",
    "how-text": "1. Create your Web3 wallet.<br>2. Mint or trade meme tokens.<br>3. Vote on the best memes to govern the platform.<br>4. Laugh your way to the top of the leaderboard!"
  },
  ru: {
    "header-title": "Web3 Банк",
    "header-subtitle": "Ваш путь к самому веселому децентрализованному будущему!",
    "welcome-title": "Добро пожаловать в Web3 Банк",
    "welcome-text": "Мы не просто банк; мы крипто-мем приключение! В Web3 Банке мы объединяем мощь блокчейна с юмором интернет-культуры. Приготовьтесь смеяться, зарабатывать и мемить свой путь к финансовой свободе.",
    "why-title": "Почему Web3 Банк?",
    "why-list": [
      "Зарабатывайте токены, делясь мемами",
      "Участвуйте в управлении на основе мемов",
      "Получите доступ к эксклюзивным NFT мемам",
      "Присоединяйтесь к самому веселому сообществу на блокчейне"
    ],
    "tokenomics-title": "Токеномика",
    "tokenomics-text": "Наша токеномика разработана для обеспечения справедливости, устойчивости и долгосрочного роста для нашего сообщества. Присоединяйтесь к нам и станьте частью децентрализованного будущего!",
    "roadmap-title": "Дорожная карта",
    "roadmap-items": [
      "Запуск токена W3B на платформе MMM",
      "Листинг на децентрализованных биржах (DEX)",
      "Листинг на CoinGecko, CoinMarketCap",
      "Глобальная маркетинговая кампания",
      "Миграция на несколько блокчейнов",
      "Разработка экосистемных проектов Web3 Bank"
    ],
    "how-title": "Как это работает",
    "how-text": "1. Создайте свой Web3 кошелек.<br>2. Чеканите или торгуйте мем-токенами.<br>3. Голосуйте за лучшие мемы для управления платформой.<br>4. Смейтесь до вершины лидерборда!"
  }
};

let currentLanguage = "en";

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "ru" : "en";
  document.getElementById("language-flag").src =
    currentLanguage === "en"
      ? "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
      : "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg";

  // Update all text elements
  document.getElementById("header-title").innerText = translations[currentLanguage]["header-title"];
  document.getElementById("header-subtitle").innerText = translations[currentLanguage]["header-subtitle"];
  document.getElementById("welcome-title").innerText = translations[currentLanguage]["welcome-title"];
  document.getElementById("welcome-text").innerHTML = translations[currentLanguage]["welcome-text"];
  document.getElementById("why-title").innerText = translations[currentLanguage]["why-title"];
  document.getElementById("why-list").innerHTML = translations[currentLanguage]["why-list"]
    .map(item => `<li>${item}</li>`)
    .join("");
  document.getElementById("tokenomics-title").innerText = translations[currentLanguage]["tokenomics-title"];
  document.getElementById("tokenomics-text").innerText = translations[currentLanguage]["tokenomics-text"];
  document.getElementById("roadmap-title").innerText = translations[currentLanguage]["roadmap-title"];
  const roadmapItems = document.querySelectorAll('.roadmap-item p');
  roadmapItems.forEach((item, index) => {
    item.textContent = translations[currentLanguage]["roadmap-items"][index];
  });
  document.getElementById("how-title").innerText = translations[currentLanguage]["how-title"];
  document.getElementById("how-text").innerHTML = translations[currentLanguage]["how-text"];
}
