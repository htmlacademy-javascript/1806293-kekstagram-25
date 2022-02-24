// Задача 1

// источник https://learn.javascript.ru/task/random-int-min-max
function isRandomInteger(min, max) {
  const RANDOM_COUNT = min + Math.random() * (max + 1 - min);
  return Math.floor(RANDOM_COUNT);
}
isRandomInteger();


// Задача 2
function isCheckLineLength (checkString, maxLength) {
  if (checkString.length <= maxLength) {
    return true;
  }
  return false;
}
isCheckLineLength();
