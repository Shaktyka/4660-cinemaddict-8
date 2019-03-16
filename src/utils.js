// Генерация случайного числа от min до max
export const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

// Возвращает строку из массива с указанным разделителем
export const getStringFromArray = (array, delimeter = `, `) => array.join(delimeter);

// Генерирует элемент из строки
export const renderElement = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content;
};

export default renderElement;
