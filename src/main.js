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

// Массив названий фильтров
const filters = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`,
  `Stats`
];

// Фильтры, для которых не нужны кол-ва карточек
const activeFilterName = `All movies`;
const addFilterName = `Stats`;

// Рендеринг фильтра
const renderFilterList = (filtersArr, block) => {
  filtersArr.forEach((filterName) => {
    const isActiveFilter = (filterName === activeFilterName) ? true : false;
    const isAddFilter = (filterName === addFilterName) ? true : false;
    const count = (isActiveFilter || isAddFilter) ? 0 : getRandomNumber(1, 20);

    const filter = renderFilter(filterName, count, isActiveFilter, isAddFilter);

    block.appendChild(filter);
  });
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterBlock);

// Стартовая отрисовка карточек в основной блок
renderCardList(cardsMainNumber, filmsMainBlock);
renderCardList(cardsTopNumber, filmsTopBlock);
renderCardList(cardsCommentsNumber, filmsCommentsBlock);
