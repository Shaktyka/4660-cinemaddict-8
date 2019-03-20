import {getRandomNumber} from './utils.js';

// Количества миллисекунд для ограничения выборки timestamp
const Milliseconds = {
  ONE_HOUR: 3600000,
  SIXTY_THREE_YEARS: 1892160000025
};

const filmDirectors = [
  `Coward Robert Ford`,
  `Steven Caple Jr.`,
  `Julius Avery`,
  `Anthony Russo`,
  `Christopher McQuarrie`,
  `Alex Garland`,
  `Bradley Cooper`,
  `Ryan Coogler`,
  `Damien Chazelle`,
  `Steven Spielberg`,
  `Phil Johnston`,
  `Paul King`,
  `Wes Ball`,
  `Brad Bird`,
  `Travis Knight`
];

const filmWriters = [
  `Billy Wilder`,
  `Ethan Coen and Joel Coen`,
  `Robert Towne`,
  `Quentin Tarantino`,
  `Francis Ford Coppola`,
  `William Goldman`,
  `Charlie Kaufman`,
  `Woody Allen`,
  `Nora Ephron`,
  `Ernest Lehman`,
  `Paul Schrader`,
  `Oliver Stone`
];

const filmTitles = [
  `The Assassination Of Jessie James`,
  `Creed II`,
  `Overlord`,
  `Avengers: Infinity War`,
  `Mission: Impossible`,
  `Annihilation`,
  `Matrix`,
  `A star is Born`,
  `Interstellar`,
  `Green Mile`,
  `Black Panther`,
  `First Man`,
  `Ready Player One`,
  `Maze Runner`,
  `Ralph Breaks the Internet`
];

const actorsList = [
  `Robert Downey Jr.`,
  `Chris Hemsworth`,
  `Mark Ruffalo`,
  `Chris Evans`,
  `Tom Cruise`,
  `Henry Cavill`,
  `Ving Rhames`,
  `Simon Pegg`,
  `Shameik Moore`,
  `Jake Johnson`,
  `Hailee Steinfeld`,
  `Hailee Steinfeld`,
  `Mahershala Ali`,
  `Natalie Portman`,
  `Tessa Thompson`
];

const filmGenres = [
  `Comedy`,
  `Drama`,
  `Crime`,
  `Action`,
  `Adventure`,
  `Fantasy`,
  `Thriller`,
  `Animation`,
  `Horror`,
  `Biography`,
  `Sci-Fi`,
  `History`,
  `Romance`,
  `Mystery`,
  `Sport`
];

const filmPosters = [
  `three-friends.jpg`,
  `moonrise.jpg`,
  `fuga-da-new-york.jpg`,
  `accused.jpg`,
  `blackmail.jpg`
];

const filmCountries = [
  `Russia`,
  `UK`,
  `China`,
  `Japan`,
  `France`,
  `Canada`,
  `USA`,
  `India`,
  `Italy`
];

const ageRating = [
  `0+`,
  `6+`,
  `12+`,
  `16+`,
  `18+`,
  `R`,
  `G`,
  `PG`,
  `PG-13`,
  `NC-17`
];

const descriptionFrases = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

// Возвращает дробное десятичное число (рейтинг)
const getRating = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

// Возвращает рандомную дату в диапазоне
const getRandomDate = () => Date.now() - getRandomNumber(Milliseconds.ONE_HOUR, Milliseconds.SIXTY_THREE_YEARS);

// Возвращает часы и минуты из переданного кол-ва минут
const formatTime = (minutes) => {
  const hours = Math.round(minutes / 60);
  const mins = (minutes % 60) ? (minutes % 60 + `m`) : ``;
  return `${hours}h&nbsp;${mins}`;
};

// Возвращает true или false
const getBoolean = () => Math.random() >= 0.5;

// Перемешивает массив
const shuffleArray = (array) => {
  const copiedArray = array.slice();
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
  }
  return copiedArray;
};

// Возвращает х элементов из массива
const getElementsFromArray = (array, num) => shuffleArray(array).slice(0, num);

// Получаем данные для карточки фильма
const makeCard = () => {
  return {
    filmTitle: {
      release: filmTitles[getRandomNumber(0, filmTitles.length - 1)],
      original: filmTitles[getRandomNumber(0, filmTitles.length - 1)]
    },
    release: {
      premiereDate: getRandomDate(),
      digitalDate: getRandomDate()
    },
    director: filmDirectors[getRandomNumber(0, filmDirectors.length - 1)],
    writers: getElementsFromArray(filmWriters, getRandomNumber(1, 3)),
    actors: getElementsFromArray(actorsList, getRandomNumber(1, 5)),
    description: getElementsFromArray(descriptionFrases, getRandomNumber(1, 3)),
    duration: formatTime(getRandomNumber(60, 200)),
    seasons: getRandomNumber(0, 10),
    genres: filmGenres[getRandomNumber(0, filmGenres.length - 1)],
    ageRating: ageRating[getRandomNumber(0, ageRating.length - 1)],
    rating: {
      average: getRating(0, 10),
      user: getRating(0, 10)
    },
    country: filmCountries[getRandomNumber(0, filmCountries.length - 1)],
    poster: filmPosters[getRandomNumber(0, filmPosters.length - 1)],
    comments: getRandomNumber(0, 10),
    inWatchlist: getBoolean(),
    isWatched: getBoolean(),
    isFavorite: getBoolean()
  };
};

export default makeCard;
