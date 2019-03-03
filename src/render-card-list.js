import renderCard from './render-card.js';

// Отрисовка списка задач
const renderCardList = (amount, block) => {
  block.innerHTML = ``;

  for (let i = 0; i < amount; i++) {
    block.appendChild(renderCard());
  }
};

export default renderCardList;
