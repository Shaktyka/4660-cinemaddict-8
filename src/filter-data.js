import {getRandomNumber} from './utils.js';

const filterData = [
  {
    title: `All movies`,
    count: 7
  },
  {
    title: `Watchlist`,
    count: getRandomNumber(1, 12)
  },
  {
    title: `History`,
    count: getRandomNumber(1, 12)
  },
  {
    title: `Favorites`,
    count: getRandomNumber(1, 12)
  }
];

export default filterData;
