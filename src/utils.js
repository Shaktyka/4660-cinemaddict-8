// Генерация случайного числа от min до max
export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

// Генерирует элемент из строки
export const renderElement = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div.firstChild;
};

export default renderElement;
