import renderElement from './utils.js';

// Рендеринг одного фильтра
const renderFilter = (filterName, cardAmount, isActive = false, isAdditional = false, changeActiveFilterClass, renderCardList, cardBlock) => {
  const cardsAmountBadge = (filterName === `All movies`) ? `` : `<span class ="main-navigation__item-count">${cardAmount}</span>`;

  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${cardAmount ? cardsAmountBadge : ``}</a>`;
  const element = renderElement(string);
  const link = element.querySelector(`.main-navigation__item`);

  link.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    renderCardList(cardAmount, cardBlock);
    changeActiveFilterClass(evt.target);
  });

  return element;
};

export default renderFilter;
