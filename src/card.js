import renderElement from './utils.js';

// Класс для отрисовки карточки фильма
class Card {
  constructor(data, hasControls) {
    this._title = data.filmTitle.release;
    this._avgRating = data.rating.average;
    this._year = new Date(data.release.premiereDate).getFullYear();
    this._duration = data.duration;
    this._genre = data.genre;
    this._poster = data.poster;
    this._description = data.description;
    this._comments = data.comments;
    this._inWatchlist = data.inWatchlist;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;
    this._element = null;
    this._hasControls = hasControls;
    this.onCommentsButtonClick = this.onCommentsButtonClick.bind(this);
  }

  // Формирует шаблон с данными
  get template() {
    return `<article class="film-card ${this._hasControls ? `` : `film-card--no-controls`}">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._avgRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._duration}</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="./images/posters/${this._poster}" alt="${this._title}" class="film-card__poster">
      <p class="film-card__description">${this._description.join(` `)}</p>
      <button class="film-card__comments">${this._comments} comments</button>
      ${this._hasControls ? `<form class="film-card__controls"><button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">${this._inWatchlist ? `WL` : `Add to watchlist`}</button><button class="film-card__controls-item button film-card__controls-item--mark-as-watched">${this._isWatched ? `WTCHD` : `Mark as watched`}</button><button class="film-card__controls-item button film-card__controls-item--favorite">${this._isFavorite ? `FAV` : `Mark as favorite`}</button></form>` : ``}
    </article>`.trim();
  }

  // Возвращает DOM-элемент
  render() {
    this._element = renderElement(this.template);
    return this._element;
    // здесь же должны устанавл-ся обраб-ки событий?
  }

  onCommentsButtonClick(evt) {
    evt.preventDefault();
    //
  }

  unrender() {
    //
  }

  onClick() {
    //
  }

  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this.onCommentsButtonClick);
  }

  unbind() {
    //
  }

}

export default Card;
