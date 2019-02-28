import filterClickHandler from './filter-click-handler.js';

// Рендеринг одного фильтра
const renderFilter = (filterName, cardAmount = 0, isActive = false, isAdditional = false) => {
  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${cardAmount ? `<span class ="main-navigation__item-count">${cardAmount}</span>` : ``}</a>`;

  const template = document.createElement(`template`);
  template.innerHTML = string;
  const element = template.content.firstChild;
  element.addEventListener(`click`, filterClickHandler);

  return element;
};

export default renderFilter;
