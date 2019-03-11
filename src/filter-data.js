import {getRandomNumber} from './utils.js';

const filterData = [
  {
    title: `All movies`,
    count: 7,
    active: true,
    additional: false
  },
  {
    title: `Watchlist`,
    count: getRandomNumber(1, 12),
    active: false,
    additional: false
  },
  {
    title: `History`,
    count: getRandomNumber(1, 12),
    active: false,
    additional: false
  },
  {
    title: `Favorites`,
    count: getRandomNumber(1, 12),
    active: false,
    additional: false
  },
  {
    title: `Stats`,
    count: 0,
    active: false,
    additional: true
  }
];

export default filterData;
