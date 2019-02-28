import renderFilter from './render-filter.js';
import getRandomNumber from './utils.js';
import renderCardList from './render-card-list.js';

// Стартовое кол-во карточек
const cardsMainNumber = 7;
const cardsTopNumber = 2;
const cardsCommentsNumber = 2;

const filterBlock = document.querySelector(`.main-navigation`);

const filmsMainBlock = document.querySelector(`.films .films-list__container`);
const filmsTopBlock = document.querySelector(`.rating-top .films-list__container`);
const filmsCommentsBlock = document.querySelector(`.comments-top .films-list__container`);

// Список фильтров
const filters = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`,
  `Stats`
];

// Рендеринг фильтра
const renderFilterList = (filtersArr, block) => {
  filtersArr.forEach((filterName, i) => {
    const first = (i === 0) ? true : false;
    const last = (i === filtersArr.length - 1) ? true : false;
    const count = (first || last) ? 0 : getRandomNumber(1, 20);

    const filter = renderFilter(filterName, count, first, last);

    block.appendChild(filter);
  });
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterBlock);

// Стартовая отрисовка карточек в основной блок
renderCardList(cardsMainNumber, filmsMainBlock);
renderCardList(cardsTopNumber, filmsTopBlock);
renderCardList(cardsCommentsNumber, filmsCommentsBlock);
