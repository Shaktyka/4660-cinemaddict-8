import renderElement from './utils.js';

const renderFilter = (filterDataObject, isWithoutCount, isActiveFilter, changeActiveFilterClass, renderCardList, cardBlock) => {
  const string = `<a href="#${filterDataObject.title}" class="main-navigation__item ${isActiveFilter ? `main-navigation__item--active` : ``}">${filterDataObject.title} ${isWithoutCount ? `` : `<span class ="main-navigation__item-count">${filterDataObject.count}</span>`}</a>`;
  const element = renderElement(string);

  const link = element.children.lenght > 1 ? element.querySelector(`.main-navigation__item`) : element;

  link.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    renderCardList(filterDataObject.count, cardBlock);
    changeActiveFilterClass(evt.target);
  });

  return element;
};

export default renderFilter;
