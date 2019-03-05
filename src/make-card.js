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

// Превращает минуты в часы и минуты
const formatTime = (minutes) => {
  const hours = Math.round(minutes / 60);
  const mins = (minutes % 60) ? (minutes % 60 + `m`) : ``;
  return `${hours}h&nbsp;${mins}`;
};

// Функция для выбора true или false
const getBoolean = () => Math.random() >= 0.5;

// Отдаёт 1 случайное значение из полученного массива
const getRandomString = (array) => array[Math.floor(Math.random() * array.length)];

// Получаем данные для карточки фильма
const makeCard = () => {
  return {
    filmTitle: getRandomString(filmTitles),
    year: getRandomNumber(1950, 2019),
    avgRating: getRating(0, 10),
    duration: formatTime(getRandomNumber(60, 200)),
    genre: getRandomString(filmGenres),
    poster: getRandomString(filmPosters),
    description: getFilmDescription(getRandomNumber(1, 3)),
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
