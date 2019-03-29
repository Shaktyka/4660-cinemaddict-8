import Component from './component.js';
import moment from 'moment';
import 'moment-duration-format';

const Keycode = {
  ESC: 27,
  ENTER: 13
};

class Popup extends Component {
  constructor(data) {
    super();
    this._poster = data.poster;
    this._title = data.filmTitle.release;
    this._titleOriginal = data.filmTitle.original;
    this._ageRating = data.ageRating;
    this._avgRating = data.rating.average;
    this._userRating = data.rating.user;
    this._director = data.director;
    this._writers = (data.writers).join(`, `);
    this._actors = (data.actors).join(`, `);
    this._country = data.country;
    this._duration = data.duration;
    this._description = (data.description).join(` `);
    this._comments = data.comments;
    this._releaseDate = data.release.premiereDate;
    this._genres = data.genres;

    this._inWatchlist = data.inWatchlist;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;

    this._onPopupClose = null;
    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);

    this._onSubmit = null;

    this._onCommentAdd = null;
    this._onCommentKeyDown = this._onCommentKeyDown.bind(this);

    this._onRatingChange = null;
    this._onRatingClick = this._onRatingClick.bind(this);

    this._onEmojiClick = this._onEmojiClick.bind(this);

    this._onPopupEscPress = this._onPopupEscPress.bind(this);
    this._onDocumentCtrlEnterPress = this._onDocumentCtrlEnterPress.bind(this);
  }

  get template() {
    return `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${this._poster}" alt="${this._title}">

            <p class="film-details__age">${this._ageRating}</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${this._title}</h3>
                <p class="film-details__title-original">Original: ${this._titleOriginal}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${this._avgRating}</p>
                <p class="film-details__user-rating">Your rate ${this._userRating}</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${this._director}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${this._writers}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${this._actors}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${moment(this._releaseDate).format(`DD MMMM YYYY`)} (${this._country})</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${moment.duration(this._duration, `minutes`).format(`mm [min]`)}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${this._country}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  ${this._genres.map((genre) => (`<span class="film-details__genre">${genre}</span>`.trim())).join(``)}
                </td>
              </tr>
            </table>

            <p class="film-details__film-description">${this._description}</p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._inWatchlist ? `checked` : ``}>
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._isWatched ? `checked` : ``}>
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._isFavorite ? `checked` : ``}>
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>

        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>

          <ul class="film-details__comments-list">
            ${this._comments.map((item) => (`
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">${item.emoji}</span>
                <div>
                  <p class="film-details__comment-text">${item.comment}</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">${item.author}</span>
                    <span class="film-details__comment-day">${moment(item.date).fromNow()}</span>
                  </p>
                </div>
              </li>`.trim())).join(``)}
          </ul>

          <div class="film-details__new-comment">
            <div>
              <label for="add-emoji" class="film-details__add-emoji-label">😐</label>
              <input type="checkbox" class="film-details__add-emoji visually-hidden" id="add-emoji">

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">😴</label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-neutral-face" value="neutral-face" checked>
                <label class="film-details__emoji-label" for="emoji-neutral-face">😐</label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-grinning" value="grinning">
                <label class="film-details__emoji-label" for="emoji-grinning">😀</label>
              </div>
            </div>
            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="← Select reaction, add comment here (ctrl + enter)" name="comment"></textarea>
            </label>
          </div>
        </section>

        <section class="film-details__user-rating-wrap">
          <div class="film-details__user-rating-controls">
            <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
            <button class="film-details__watched-reset" type="button">undo</button>
          </div>

          <div class="film-details__user-score">
            <div class="film-details__user-rating-poster">
              <img src="images/posters/${this._poster}" alt="${this._title}" class="film-details__user-rating-img">
            </div>

            <section class="film-details__user-rating-inner">
              <h3 class="film-details__user-rating-title">${this._title}</h3>

              <p class="film-details__user-rating-feelings">How you feel it?</p>

              <div class="film-details__user-rating-score">
                ${new Array(9).fill().map((item, index) => (`
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="${index + 1}" id="rating-${index + 1}" ${(index + 1 === +this._userRating) ? `checked` : ``}>
                  <label class="film-details__user-rating-label" for="rating-${index + 1}">${index + 1}</label>`.trim())).join(``)}
              </div>
            </section>
          </div>
        </section>
      </form>
    </section>`.trim();
  }

  set onPopupClose(fn) {
    this._onPopupClose = fn;
  }

  set onCommentAdd(fn) {
    this._onCommentAdd = fn;
  }

  set onRatingChange(fn) {
    this._onRatingChange = fn;
  }

  set onRatingChange(fn) {
    this._onRatingChange = fn;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  _onCloseButtonClick(evt) {
    evt.preventDefault();
    if (typeof this._onPopupClose === `function`) {
      this._onPopupClose();
    }
  }

  _onPopupEscPress(evt) {
    if (evt.keyCode === Keycode.ESC && typeof this._onPopupClose === `function`) {
      this._onPopupClose();
    }
  }

  _processForm(formData) {
    const entry = {
      isWatchlist: this._inWatchlist,
      isWatched: this._isWatched,
      isFavorite: this._isFavorite,
      // comments: this._comments,
      // rating: ``,
    };

    const cardPopupMapper = Popup.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      if (cardPopupMapper[property]) {
        cardPopupMapper[property](value);
      }
    }

    return entry;
  }

  _onDocumentCtrlEnterPress(evt) {
    if (evt.ctrlKey && evt.keyCode === Keycode.ENTER) {
      const formData = new FormData(this._element.querySelector(`.film-details__inner`));
      const newData = this._processForm(formData);
      if (typeof this._onSubmit === `function`) {
        this._onSubmit(newData);
      }
      this.update(newData);
    }
  }

  _onCommentKeyDown(evt) {
    evt.preventDefault();
  }

  _onRatingClick() {
    //
  }

  // Выбор эмодзи
  _onEmojiClick(item) {
    this._element.querySelector(`.film-details__add-emoji-label`).textContent = item.target.textContent;
  }

  unrender() {
    if (this._element) {
      this.unbind();
      document.body.removeChild(this._element);
      this._element = null;
    }
  }

  bind() {
    this._element.querySelector(`.film-details__close-btn`).addEventListener(`click`, this._onCloseButtonClick);
    this._element.querySelector(`.film-details__comment-input`).addEventListener(`keydown`, this._onCommentKeyDown);
    this._element.querySelectorAll(`.film-details__user-rating-input`).forEach((it) => {
      it.addEventListener(`click`, this._onRatingClick);
    });
    this._element.querySelectorAll(`.film-details__emoji-label`).forEach((it) => {
      it.addEventListener(`click`, this._onEmojiClick);
    });
    document.addEventListener(`keydown`, this._onPopupEscPress);
    document.addEventListener(`keydown`, this._onDocumentCtrlEnterPress);
  }

  unbind() {
    this._element.querySelector(`.film-details__close-btn`).removeEventListener(`click`, this._onCloseButtonClick);
    this._element.querySelector(`.film-details__comment-input`).removeEventListener(`keydown`, this._onCommentKeyDown);
    this._element.querySelectorAll(`.film-details__user-rating-input`).forEach((it) => {
      it.removeEventListener(`click`, this._onRatingClick);
    });
    this._element.querySelectorAll(`.film-details__emoji-label`).forEach((it) => {
      it.removeEventListener(`click`, this._onEmojiClick);
    });
    document.removeEventListener(`keydown`, this._onPopupEscPress);
    document.removeEventListener(`keydown`, this._onDocumentCtrlEnterPress);
  }

  updateData(data) {
    this._avgRating = data.rating.average;
    this._userRating = data.rating.user;
    this._comments = data.comments;
    this._inWatchlist = data.inWatchlist;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;
  }

  // Преобразование данных из одного вида в другой
  // static createMapper(target) {
  //   return {
  //     //
  //   }
  // }


}

export default Popup;
