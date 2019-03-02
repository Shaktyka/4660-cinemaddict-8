import renderCard from './render-card.js';

// Отрисовка списка задач
const renderCardList = (amount, block) => {
  block.innerHTML = ``;

  for (let i = 0; i < amount; i++) {
    const card = renderCard();
    block.appendChild(card);
  }
};

export default renderCardList;
