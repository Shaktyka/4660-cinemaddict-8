import renderCard from './render-card.js';

// Отрисовка списка задач
const renderCardList = (amount, container) => {
  container.innerHtml = ``;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const card = renderCard();
    fragment.appendChild(card);
  }

  container.appendChild(fragment);
};

export default renderCardList;
