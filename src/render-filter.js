// Рендеринг одного фильтра
//
// <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
// <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
// <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
// <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
// <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>

const renderFilter = (filterName, taskAmount = false, isActive = false, isAdditional = false) => {
  const string = `<a href="#${filterName}" class="main-navigation__item ${isActive ? ` main-navigation__item--active` : ``} ${isAdditional ? ` main-navigation__item--additional` : ``}">${filterName} ${taskAmount ? `<span class ="main-navigation__item-
count">${taskAmount}</span>` : ``}</a>`;

  const template = document.createElement(`template`);
  template.innerHTML = string;

  const link = template.content;

  link.addEventListener(`click`, (evt) => {
    // console.log(`Количество карточек: `, **taskAmount**);
    console.log(1);
  });

  return link;
};

export default renderFilter;
