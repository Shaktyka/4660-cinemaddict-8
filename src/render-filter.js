import renderElement from './utils.js';

const renderFilter = (filterDataObject, changeActiveFilterClass, renderCardList, cardBlock) => {
  const cardsCount = filterDataObject.count;

  const string = `<a href="#${filterDataObject.title}" class="${filterDataObject.className}">${filterDataObject.title} ${cardsCount > 0 ? `<span class ="main-navigation__item-count">${cardsCount}</span>` : ``}</a>`;
  const element = renderElement(string);
  const link = element.querySelector(`.main-navigation__item`);

  link.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    renderCardList(cardsCount, cardBlock);
    changeActiveFilterClass(evt.target);
  });

  return element;
};

export default renderFilter;
