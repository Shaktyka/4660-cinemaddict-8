// import renderFilter from './render-filter.js';
// import renderCard from './render-card.js';


// Блок для вставки фильтра
const filterContainer = document.querySelector(`.main-navigation`);


// Блоки для вставки карточек задач
const filmsContainers = Array.from(document.querySelectorAll(`.films-list__container`));


// Стартовое кол-во карточек
const startCardNumber = 7;


// Список фильтров
let cardsList = null;


// Список фильтров
const filters = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`,
  `Stats`
];


// Генерация случайного числа от min до max
const getRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};


// Очистка блока от содержимого
const clearContainer = (container) => {
  container.innerHTML = ``;
};


// Обработчик клика по пункту фильтра
const filterClickHandler = (evt) => {
  evt.preventDefault();
  clearContainer(filterContainer);

  const clickedFilter = evt.target;

  renderFilterList(cardNumber, filmsContainers);
};


// Рендеринг всего фильтра
const renderFilterList = (filtersArr, container) => {
  clearContainer(filterContainer);

  const fragment = document.createDocumentFragment();

  // Отрисовка всех пунктов списка фильтра
  filtersArr.forEach((filter) => {
    const cardNumber = getRandomNumber(0, 20);
    // Повесить обработчик клика
  });

  container.appendChild(fragment);
};


// Стартовый рендеринг фильтра
// renderFilterList(filters, filterContainer);


// Отрисовка списка задач
const renderCardList = (amount, container) => {
  clearContainer(container);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const card = renderCard();
    fragment.appendChild(card);
  }

  container.appendChild(fragment);
};


// Запуск стартовой отрисовки карточек
// renderTaskList(startTasksNumber, cardContainer);
