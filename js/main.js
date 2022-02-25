// Задача 1

// источник https://learn.javascript.ru/task/random-int-min-max
function isRandomInteger(min, max) {
  const RANDOM_COUNT = min + Math.random() * (max + 1 - min);
  return Math.floor(RANDOM_COUNT);
}
isRandomInteger();

// Задача 2
const isCheckLineLength = (checkString, maxLength) => (checkString?.length <= maxLength) ? true : false;
isCheckLineLength();

// У меня все время вылазила ошибка "Uncaught TypeError: Cannot read properties of undefined (reading 'length')"
// Коллега посоветовал добавить "?" для проверки на null, такое допустимо?
