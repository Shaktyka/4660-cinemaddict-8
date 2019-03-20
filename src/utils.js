// Генерация случайного числа от min до max
export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

// Генерирует элемент из строки
export const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

// Возвращает часы и минуты из переданного кол-ва минут
export const formatTime = (minutes) => {
  const hours = Math.round(minutes / 60);
  const mins = (minutes % 60) ? (minutes % 60 + `m`) : ``;
  return `${hours}h&nbsp;${mins}`;
};

export default renderElement;
