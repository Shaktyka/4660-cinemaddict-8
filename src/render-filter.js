// Превращает строку в HTML-элемент
const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content.firstChild;
};

// Рендеринг одного фильтра
const renderFilter = (filterName, cardAmount = 0, isActive = false, isAdditional = false, cb, cardBlock) => {
  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${cardAmount ? `<span class ="main-navigation__item-count">${cardAmount}</span>` : ``}</a>`;
  const element = renderElement(string);

  element.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    cb(cardAmount, cardBlock);
  });

  return element;
};

export default renderFilter;
