import getRandomNumber from './utils.js';
import renderCardList from './render-card-list.js';

const filmsMainBlock = document.querySelector(`.films-list .films-list__container`);

// Обработчик нажатия на пункт фильтра
const filterClickHandler = (evt) => {
  evt.preventDefault();

  renderCardList(getRandomNumber(1, 15), filmsMainBlock);
};

export default filterClickHandler;
