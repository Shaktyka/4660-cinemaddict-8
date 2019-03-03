import renderElement from './utils.js';

// Активный фильтр
let activeFilter = null;

// Рендеринг одного фильтра
const renderFilter = (filterName, cardAmount = 0, isActive = false, isAdditional = false, cb, cardBlock) => {
  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${cardAmount ? `<span class ="main-navigation__item-count">${cardAmount}</span>` : ``}</a>`;
  const element = renderElement(string);

  if (element.classList.contains(`main-navigation__item--active`)) {
    activeFilter = element;
  }

  element.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    cb(cardAmount, cardBlock);

    activeFilter.classList.remove(`main-navigation__item--active`);
    activeFilter = evt.target;
    evt.target.classList.add(`main-navigation__item--active`);
  });

  return element;
};

export default renderFilter;
