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
    "use-cases-title": "Token Use Cases",
    "use-cases-items": [
      "Meme Marketplace",
      "Buy, sell, and trade meme NFTs using W3B tokens. Earn royalties from viral memes!",
      "Decentralized Governance",
      "Vote for platform upgrades and meme contests with your W3B tokens.",
      "Meme Staking",
      "Stake W3B to boost meme visibility and earn rewards.",
      "Web3 Mem Games",
      "Play meme-based blockchain games and win W3B prizes.",
      "Meme Crowdfunding",
      "Fund your meme projects using W3B tokens and community support.",
      "Educational Memes",
      "Learn blockchain basics through interactive meme courses (paid in W3B)."
    ],
    "partners-title": "Our Partners",
    "partners-items": [
      "https://via.placeholder.com/200x100?text=Partner+1",
      "https://via.placeholder.com/200x100?text=Partner+2",
      "https://via.placeholder.com/200x100?text=Partner+3"
    ],
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
    "use-cases-title": "Применение токена",
    "use-cases-items": [
      "Мем-маркетплейс",
      "Покупайте, продавайте и обменивайте мемы в формате NFT с использованием токенов W3B. Получайте роялти от вирусных мемов!",
      "Децентрализованное управление",
      "Голосуйте за обновления платформы и мем-конкурсы с помощью токенов W3B.",
      "Стейкинг мемов",
      "Стейкайте W3B для повышения видимости мемов и получения наград.",
      "Web3-игры с мемами",
      "Играйте в блокчейн-игры на основе мемов и выигрывайте W3B!",
      "Краудфандинг мемов",
      "Финансируйте свои мем-проекты через токены W3B и поддержку сообщества.",
      "Образовательные мемы",
      "Изучайте основы блокчейна через интерактивные мем-курсы (оплата в W3B)."
    ],
        "partners-title": "Наши партнеры",
    "partners-items": [
      "https://via.placeholder.com/200x100?text=Партнер+1",
      "https://via.placeholder.com/200x100?text=Партнер+2",
      "https://via.placeholder.com/200x100?text=Партнер+3"
    ],
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

  // Обновление заголовков и текстов
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
  document.getElementById("use-cases-title").innerText = translations[currentLanguage]["use-cases-title"];
  const useCaseCards = document.querySelectorAll('.use-case-card h3, .use-case-card p');
  const useCasesItems = translations[currentLanguage]["use-cases-items"];
  useCaseCards.forEach((card, index) => {
    card.textContent = useCasesItems[index];
  });
  document.getElementById("partners-title").innerText = translations[currentLanguage]["partners-title"];
  const partnerCards = document.querySelectorAll('.partner-card');
  const partnerLogos = translations[currentLanguage]["partners-items"];
  partnerCards.forEach((card, index) => {
    card.querySelector('img').src = partnerLogos[index];
    card.querySelector('img').alt = `Partner ${index + 1}`;
  });
  document.getElementById("roadmap-title").innerText = translations[currentLanguage]["roadmap-title"];
  const roadmapItems = document.querySelectorAll('.roadmap-item p');
  roadmapItems.forEach((item, index) => {
    item.textContent = translations[currentLanguage]["roadmap-items"][index];
  });
  document.getElementById("how-title").innerText = translations[currentLanguage]["how-title"];
  document.getElementById("how-text").innerHTML = translations[currentLanguage]["how-text"];
}
