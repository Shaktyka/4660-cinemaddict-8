import filterData from './filter-data.js';
import renderFilter from './render-filter.js';
import renderStatsElement from './render-stats-element.js';
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
  const hasControls = (block === filmsMainBlock) ? true : false;
  for (let i = 0; i < amount; i++) {
    fragment.appendChild(renderCard(makeCard(), hasControls));
  }
  block.appendChild(fragment);
};

// Рендеринг фильтра
const renderFilterList = (filterArray, block) => {
  const fragment = document.createDocumentFragment();

  filterArray.forEach((filterDataObject) => {
    const filterWithoutCount = filterDataObject.title === `All movies`;
    const isActiveFilter = filterDataObject.title === `All movies`;

    const filter = renderFilter(filterDataObject, filterWithoutCount, isActiveFilter, changeActiveFilterClass, renderCardList, filmsMainBlock);
    fragment.appendChild(filter);
  });

  block.appendChild(fragment);
  block.appendChild(renderStatsElement());
  activeFilter = document.querySelector(`.main-navigation__item--active`);
};

// Стартовый рендеринг фильтра
renderFilterList(filterData, filterBlock);

// Стартовая отрисовка карточек в предназначенные для них блоки
renderCardList(FilmCardsNumber.MAIN, filmsMainBlock);
renderCardList(FilmCardsNumber.TOP_RATED, filmsTopBlock);
renderCardList(FilmCardsNumber.TOP_COMMENTED, filmsCommentsBlock);
