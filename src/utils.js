// Генерация случайного числа от min до max
const getRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};

// Очистка блока от содержимого
const clearContainer = (container) => {
  container.innerHTML = ``;
};

export {getRandomNumber, clearContainer};
