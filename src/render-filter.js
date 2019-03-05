import renderElement from './utils.js';

// Рендеринг одного фильтра
const renderFilter = (filterName, cardAmount, isActive = false, isAdditional = false, switchActiveClass, renderCardList, cardBlock) => {
  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${cardAmount ? `<span class ="main-navigation__item-count">${cardAmount}</span>` : ``}</a>`;
  const element = renderElement(string);
  const link = element.querySelector(`.main-navigation__item`);

  link.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    renderCardList(cardAmount, cardBlock);
    switchActiveClass(evt.target);
  });

  return element;
};

export default renderFilter;
