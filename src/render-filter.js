import {getRandomNumber} from './utils.js';
import renderCardList from './render-card-list.js';

// Блок для вставки фильтра
const filmsContainers = Array.from(document.querySelectorAll(`.films-list__container`));

const filterClickHandler = (evt) => {
  evt.preventDefault();
  filmsContainers[0].innerHTML = ``;

  renderCardList(getRandomNumber(1, 15), filmsContainers[0]);
};

// Рендеринг одного фильтра
const renderFilter = (filterName, taskAmount = false, isActive = false, isAdditional = false) => {
  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${taskAmount ? `<span class ="main-navigation__item-
count">${taskAmount}</span>` : ``}</a>`;

  const template = document.createElement(`template`);
  template.innerHTML = string;
  const link = template.content.children;
  link[0].addEventListener(`click`, filterClickHandler);

  return link[0];
};

export {filterClickHandler, renderFilter};
