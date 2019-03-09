import {getRandomNumber} from './utils.js';

const filterData = [
  {
    title: `All movies`,
    className: `main-navigation__item main-navigation__item--active`,
    count: 7
  },
  {
    title: `Watchlist`,
    className: `main-navigation__item`,
    count: getRandomNumber(1, 12)
  },
  {
    title: `History`,
    className: `main-navigation__item`,
    count: getRandomNumber(1, 12)
  },
  {
    title: `Favorites`,
    className: `main-navigation__item`,
    count: getRandomNumber(1, 12)
  },
  {
    title: `Stats`,
    className: `main-navigation__item main-navigation__item--additional`,
    count: 0
  }
];

export default filterData;
