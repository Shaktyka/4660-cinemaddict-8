import Component from './component.js';
import moment from 'moment';
import 'moment-duration-format';

// Класс для отрисовки карточки фильма
class Card extends Component {
  constructor(data, hasControls) {
    super();
    this._title = data.filmTitle.release;
    this._avgRating = data.rating.average;
    this._year = data.release.premiereDate;
    this._duration = data.duration;
    this._genres = (data.genres).join(`, `);
    this._poster = data.poster;
    this._description = data.description;
    this._comments = data.comments;
    this._inWatchlist = data.inWatchlist;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;
    this._hasControls = hasControls;

    this._onCommentsClick = null;
    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);
  }

  _onCommentsButtonClick(evt) {
    evt.preventDefault();
    if (typeof this._onCommentsClick === `function`) {
      this._onCommentsClick();
    }
  }

  set onCommentsClick(fn) {
    this._onCommentsClick = fn;
  }

  get template() {
    return `<article class="film-card ${this._hasControls ? `` : `film-card--no-controls`}">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._avgRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${moment(this._year).year()}</span>
        <span class="film-card__duration">${moment.duration(this._duration, `minutes`).format(`h[h] mm[min]`)}</span>
        <span class="film-card__genre">${this._genres}</span>
      </p>
      <img src="./images/posters/${this._poster}" alt="${this._title}" class="film-card__poster">
      <p class="film-card__description">${this._description.join(` `)}</p>
      <button class="film-card__comments">${this._comments.length} comments</button>
      ${this._hasControls ? `<form class="film-card__controls"><button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">${this._inWatchlist ? `WL` : `Add to watchlist`}</button><button class="film-card__controls-item button film-card__controls-item--mark-as-watched">${this._isWatched ? `WTCHD` : `Mark as watched`}</button><button class="film-card__controls-item button film-card__controls-item--favorite">${this._isFavorite ? `FAV` : `Mark as favorite`}</button></form>` : ``}
    </article>`.trim();
  }

  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onCommentsButtonClick);
  }

  unbind() {
    this._element.querySelector(`.film-card__comments`).removeEventListener(`click`, this._onCommentsButtonClick);
  }

  update(data) {
    this._inWatchlist = data.inWatchlist;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;
    this._comments = data.comments;
    this._userRating = data.rating.user;
  }

}

export default Card;
