import {getRandomNumber} from './utils.js';

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
  `./images/posters/three-friends.jpg`,
  `./images/posters/moonrise.jpg`,
  `./images/posters/fuga-da-new-york.jpg`,
  `./images/posters/accused.jpg`,
  `./images/posters/blackmail.jpg`
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

// Генерируем рандомное описание фильма
const getFilmDescription = (number) => {
  let description = ``;
  const frases = [
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
  for (let i = 1; i <= number; i++) {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    description += (i === number) ? frase : (frase + ` `);
  }
  return description;
};

// Генерируем рандомный рейтинг фильма
const getRating = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

// Генерация рандомной даты
const getRandomDate = () => Date.now() - getRandomNumber(10000000, 1000000000000);

// Превращает минуты в часы и минуты
const formatTime = (minutes) => {
  const hours = Math.round(minutes / 60);
  const mins = (minutes % 60) ? (minutes % 60 + `m`) : ``;
  return `${hours}h&nbsp;${mins}`;
};

// Функция для выбора true или false
const getBoolean = () => Math.random() >= 0.5;

// Отдаёт одно случайное значение из полученного массива
const getRandomString = (array) => array[Math.floor(Math.random() * array.length)];

// Возвращает num уникальных имён актёров из массива
const getRandomActorsList = (actors, num) => {
  const actorsArr = [];
  const shuffled = actors.sort(() => Math.random() - 0.5);
  for (let i = 0; i < num; i++) {
    actorsArr.push(shuffled[i]);
  }
  return actorsArr.join(`, `);
};

// Получаем данные для карточки фильма
const makeCard = () => {
  return {
    filmTitle: {
      release: getRandomString(filmTitles),
      original: getRandomString(filmTitles)
    },
    release: {
      // year: getRandomNumber(1950, 2019),
      premiereDate: getRandomDate(),
      digitalDate: getRandomDate()
    },
    actors: getRandomActorsList(actorsList, getRandomNumber(1, 5)), // нужна функция выбора неск. актёров из списка
    description: getFilmDescription(getRandomNumber(1, 3)),
    duration: formatTime(getRandomNumber(60, 200)),
    seasons: getRandomNumber(0, 10),
    genre: getRandomString(filmGenres),
    ageRating: getRandomString(ageRating),
    rating: {
      average: getRating(0, 10),
      user: getRating(0, 10)
    },
    country: getRandomString(filmCountries),
    poster: getRandomString(filmPosters),
    comments: getRandomNumber(0, 10),
    controls: {
      watchlist: getBoolean(),
      watched: getBoolean(),
      favorite: getBoolean()
    },
    isControls: getBoolean()
  };
};

export default makeCard;
