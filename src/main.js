import filterData from './filter-data.js';
import renderFilter from './render-filter.js';
import {getRandomNumber} from './utils.js';
import makeCard from './make-card.js';
import renderCard from './render-card.js';

const FilmCardsNumber = {
  MAIN: 7,
  TOP_RATED: 2,
  TOP_COMMENTED: 2
};

const filterBlock = document.querySelector(`.main-navigation`);
const filmsMainBlock = document.querySelector(`.films .films-list__container`);
const filmsTopBlock = document.querySelector(`.rating-top .films-list__container`);
const filmsCommentsBlock = document.querySelector(`.comments-top .films-list__container`);

// Активный фильтр
let activeFilter = null;

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

// Рендеринг фильтра
const renderFilterList = (filterData, block) => {
  const fragment = document.createDocumentFragment();

  filterData.forEach((filterDataObject) => {
    const filter = renderFilter(filterDataObject, changeActiveFilterClass, renderCardList, filmsMainBlock);
    fragment.appendChild(filter);
  });

  block.appendChild(fragment);
};

// Стартовый рендеринг фильтра
renderFilterList(filterData, filterBlock);

// Стартовая отрисовка карточек в предназначенные для них блоки
renderCardList(FilmCardsNumber.MAIN, filmsMainBlock);
renderCardList(FilmCardsNumber.TOP_RATED, filmsTopBlock);
renderCardList(FilmCardsNumber.TOP_COMMENTED, filmsCommentsBlock);
