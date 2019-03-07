import renderFilter from './render-filter.js';
import {getRandomNumber} from './utils.js';
import makeCard from './make-card.js';
import renderCard from './render-card.js';

// Стартовое кол-во карточек
const cardsMainNumber = 7;
const cardsTopNumber = 2;
const cardsCommentsNumber = 2;

const filterBlock = document.querySelector(`.main-navigation`);

const filmsMainBlock = document.querySelector(`.films .films-list__container`);
const filmsTopBlock = document.querySelector(`.rating-top .films-list__container`);
const filmsCommentsBlock = document.querySelector(`.comments-top .films-list__container`);

// Активный фильтр
let activeFilter = null;

// Массив названий фильтров
const filters = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`,
  `Stats`
];

// Переключение активного класса
const changeActiveFilterClass = (clickedFilter) => {
  activeFilter.classList.remove(`main-navigation__item--active`);
  activeFilter = clickedFilter;
  clickedFilter.classList.add(`main-navigation__item--active`);
};

// Отрисовка списка задач
const renderCardList = (amount, block) => {
  block.innerHTML = ``;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    fragment.appendChild(renderCard(makeCard()));
  }
  block.appendChild(fragment);
};

// Фильтры, для которых не нужны кол-ва карточек
const allMoviesFilter = `All movies`;
const statsFilter = `Stats`;

// Рендеринг фильтра
const renderFilterList = (filtersArr, block) => {
  const fragment = document.createDocumentFragment();

  filtersArr.forEach((filterName) => {
    const isAllMoviesFilter = (filterName === allMoviesFilter) ? true : false;
    const isAdditionalFilter = (filterName === statsFilter) ? true : false;

    // Вычисление кол-ва карточек в зависимости от фильтра
    let count = 0;
    if (isAllMoviesFilter) {
      count = 7;
    } else if (isAdditionalFilter) {
      count = 0;
    } else {
      count = getRandomNumber(1, 20);
    }

    const filter = renderFilter(filterName, count, isAllMoviesFilter, isAdditionalFilter, changeActiveFilterClass, renderCardList, filmsMainBlock);

    if (filter.querySelector(`a`).classList.contains(`main-navigation__item--active`)) {
      activeFilter = filter.querySelector(`a`);
    }

    fragment.appendChild(filter);
  });
  block.appendChild(fragment);
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterBlock);

// Стартовая отрисовка карточек в основной блок
renderCardList(cardsMainNumber, filmsMainBlock);
renderCardList(cardsTopNumber, filmsTopBlock);
renderCardList(cardsCommentsNumber, filmsCommentsBlock);
