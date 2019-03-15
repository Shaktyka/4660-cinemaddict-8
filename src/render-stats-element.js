import renderElement from './utils.js';

// Рендеринг элемента Stats
const renderStatsElement = () => {
  const string = `<a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>`;
  return renderElement(string);
};

export default renderStatsElement;
