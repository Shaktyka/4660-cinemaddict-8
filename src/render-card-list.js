import renderCard from './render-card.js';

// Отрисовка списка задач
const renderCardList = (amount, block) => {
  block.innerHTML = ``;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const card = renderCard();
    fragment.appendChild(card);
  }

  block.appendChild(fragment);
};

export default renderCardList;
