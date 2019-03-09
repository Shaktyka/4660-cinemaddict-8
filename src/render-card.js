import renderElement from './utils.js';

// Рендеринг одной задачи
const renderCard = (cardData) => {
  const string = `<article class="film-card ${(cardData.hasControls) ? `` : `film-card--no-controls`}">
  <h3 class="film-card__title">${cardData.filmTitle.release}</h3>
  <p class="film-card__rating">${cardData.rating.average}</p>
  <p class="film-card__info">
    <span class="film-card__year">${cardData.release.year}</span>
    <span class="film-card__duration">${cardData.duration}</span>
    <span class="film-card__genre">${cardData.genre}</span>
  </p>
  <img src="${cardData.poster}" alt="${cardData.filmTitle.release}" class="film-card__poster">
  <p class="film-card__description">${cardData.description}</p>
  <button class="film-card__comments">${cardData.comments} comments</button>
  ${(!cardData.hasControls) ? `` : `<form class="film-card__controls"><button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">${cardData.watchlist ? `WL` : `Add to watchlist`}</button><button class="film-card__controls-item button film-card__controls-item--mark-as-watched">${cardData.watched ? `WTCHD` : `Mark as watched`}</button><button class="film-card__controls-item button film-card__controls-item--favorite">${cardData.favorite ? `FAV` : `Mark as favorite`}</button></form>`}
  </article>`;

  return renderElement(string);
};

export default renderCard;
