import { filterClickHandler, renderFilter } from './render-filter.js';
import renderCard from './render-card.js';
import { getRandomNumber, clearContainer } from './utils.js';
import renderCardList from './render-card-list.js';

// Блок для вставки фильтра
const filterContainer = document.querySelector(`.main-navigation`);

// 3 блока для вставки карточек задач
const filmsContainers = Array.from(document.querySelectorAll(`.films-list__container`));

// Стартовое кол-во карточек
const cardsAmount = [7, 2, 2];

// Список фильтров
const filters = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`,
  `Stats`
];

// Рендеринг фильтра
const renderFilterList = (filtersArr, container) => {
  const fragment = document.createDocumentFragment();

  filtersArr.forEach((filterName, i) => {
    const first = (i === 0) ? true : null;
    const last = (i === filtersArr.length - 1) ? true : null;
    const count = (first || last) ? 0 : getRandomNumber(1, 20);

    const filter = renderFilter(filterName, count, first, last);

    container.appendChild(filter);
  });
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterContainer);

// Стартовая отрисовка карточек в основной блок
renderCardList(cardsAmount[0], filmsContainers[0]);
renderCardList(cardsAmount[1], filmsContainers[1]);
renderCardList(cardsAmount[2], filmsContainers[2]);
