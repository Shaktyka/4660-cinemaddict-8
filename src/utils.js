// Генерация случайного числа от min до max
const getRandomNumber = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

export default getRandomNumber;
