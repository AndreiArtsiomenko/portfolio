/*--------------------TRANSLATE--------------------------------------*/

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Retouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
};

const engBtn = document.querySelector('.btn-en');
const ruBtn = document.querySelector('.btn-ru');
const switchLngBtns = document.querySelector('.switch-lng__btns');

function getTranslate(lang) {
  const dataI18 = document.querySelectorAll('[data-i18]')

  dataI18.forEach(item => item.textContent = i18Obj[lang][item.dataset.i18])
}

ruBtn.addEventListener("click", function () {
  getTranslate('ru')
});
engBtn.addEventListener("click", function () {
  getTranslate('en')
});

function changeClassActiveLng(event) {
  const reSwitchLng = document.querySelectorAll('.switch-lng__btn');

  reSwitchLng.forEach((item) => item.classList.remove('active'));

  if (event.target.classList.contains('switch-lng__btn')) {
    event.target.classList.add('active');
  }
};

switchLngBtns.addEventListener("click", changeClassActiveLng)

/*--------------------MENU-BURGER--------------------------------------*/

const iconNav = document.querySelector('.nav__icon');
const headerNav = document.querySelector('.header__nav');

iconNav.addEventListener('click', function (f) {
  document.body.classList.toggle('lock')
  iconNav.classList.toggle('open');
  headerNav.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((item) => item.addEventListener('click', closeMenu));

function closeMenu(event) {
  if (event.target.classList.contains('nav__link')) {
    document.body.classList.remove('lock');
    iconNav.classList.remove('open');
    headerNav.classList.remove('open');
  }
};

/*--------------------CHANGE IMAGES--------------------------------------*/

const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioImg = document.querySelectorAll('.portfolio-img');

function changeImage(event) {
  if (event.target.classList.contains('portfolio-btn')) {
    let season = event.target.dataset.season;
    portfolioImg.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
  }
};

portfolioBtns.addEventListener("click", changeImage);

/*--------------------ACTIVE BUTTONS--------------------------------------*/

function changeClassActive(event) {
  const reActiveBtn = document.querySelectorAll('.portfolio-btn');

  reActiveBtn.forEach((item) => item.classList.remove('active'));

  if (event.target.classList.contains('portfolio-btn')) {
    event.target.classList.add('active');
  }
};

portfolioBtns.addEventListener("click", changeClassActive)

/*--------------------CACHE IMAGES--------------------------------------*/

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages(arr) {
  arr.forEach(item => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${item}/${i}.jpg`;
    }
  })
};

preloadImages(seasons);

/*--------------------THEMES--------------------------------------*/

const theme = document.querySelector('.header__theme');
const mainSkills = document.querySelector('.main__skills');
const mainPortfolio = document.querySelector('.main__portfolio');
const mainVideo = document.querySelector('.main__video');
const mainPrice = document.querySelector('.main__price');
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const titleSection = document.querySelectorAll('.title-section');
const wrapperTitle = document.querySelectorAll('.wrapper-title');
const itemText = document.querySelectorAll('.item__text');
const itemSubtitle = document.querySelectorAll('.item__subtitle');
const itemPriceTitle = document.querySelectorAll('.item-price__title');
const itemPriceSpan = document.querySelectorAll('.item-price__span');

function changeClassTheme() {
  const headerNavOpen = document.querySelector('.header__nav.open');
  const arr = [...portfolioBtn, ...wrapperTitle, ...titleSection, ...itemText, ...itemSubtitle, ...itemPriceTitle, ...itemPriceSpan, mainSkills, mainPortfolio, mainVideo, mainPrice]
  arr.forEach((item) => item.classList.toggle('light-theme'));
};

function changeIcon() {
  theme.classList.toggle('moon');
}

theme.addEventListener("click", changeClassTheme);
theme.addEventListener("click", changeIcon);


console.log('Score 72/75\n\n - Смена изображений в секции portfolio +25\n\n - Перевод страницы на два языка +25\n\n - Переключение светлой и тёмной темы +22\n Бургер меню не меняет цвет на светлый - 3 балла\n\n - Дополнительный функционал 0')


//'.nav__icon::before', '.nav__icon::after', '.nav__icon span', '.nav__link', '.header__nav']