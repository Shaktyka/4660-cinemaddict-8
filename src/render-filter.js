import getRandomNumber from './utils.js';
import {filmsMainBlock} from './variables.js';
import renderCardList from './render-card-list.js';

// Обработчик нажатия на пункт фильтра
const filterClickHandler = (evt) => {
  evt.preventDefault();
  filmsMainBlock.innerHTML = ``;

  renderCardList(getRandomNumber(1, 15), filmsMainBlock);
};

// Рендеринг одного фильтра
const renderFilter = (filterName, taskAmount = 0, isActive = false, isAdditional = false) => {
  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${taskAmount ? `<span class ="main-navigation__item-count">${taskAmount}</span>` : ``}</a>`;

  const template = document.createElement(`template`);
  template.innerHTML = string;
  const element = template.content.firstChild;
  element.addEventListener(`click`, filterClickHandler);

  return element;
};

export {filterClickHandler, renderFilter};
