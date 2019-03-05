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
const switchActiveClass = (target) => {
  activeFilter.classList.remove(`main-navigation__item--active`);
  activeFilter = target;
  target.classList.add(`main-navigation__item--active`);
};

// Отрисовка списка задач
const renderCardList = (amount, block) => {
  block.innerHTML = ``;

  for (let i = 0; i < amount; i++) {
    block.appendChild(renderCard(makeCard()));
  }
};

// Фильтры, для которых не нужны кол-ва карточек
const activeFilterName = `All movies`;
const addFilterName = `Stats`;

// Рендеринг фильтра
const renderFilterList = (filtersArr, block) => {
  filtersArr.forEach((filterName) => {
    const isActiveFilter = (filterName === activeFilterName) ? true : false;
    const isAddFilter = (filterName === addFilterName) ? true : false;

    // Вычисление кол-ва карточек в зависимости от фильтра
    let count = getRandomNumber(1, 20);
    if (isActiveFilter) {
      count = 7;
    } else if (isAddFilter) {
      count = 0;
    }

    const filter = renderFilter(filterName, count, isActiveFilter, isAddFilter, switchActiveClass, renderCardList, filmsMainBlock);

    if (filter.querySelector(`a`).classList.contains(`main-navigation__item--active`)) {
      activeFilter = filter.querySelector(`a`);
    }

    block.appendChild(filter);
  });
};

// Стартовый рендеринг фильтра
renderFilterList(filters, filterBlock);

// Стартовая отрисовка карточек в основной блок
renderCardList(cardsMainNumber, filmsMainBlock);
renderCardList(cardsTopNumber, filmsTopBlock);
renderCardList(cardsCommentsNumber, filmsCommentsBlock);
