// Задача 1

// источник https://learn.javascript.ru/task/random-int-min-max

const getRandomInteger = (min, max) => 
  min + Math.floor(Math.random() * (max + 1 - min));

getRandomInteger();


// Задача 2
const checkLineLength = (checkString, maxLength) => checkString?.length <= maxLength;

checkLineLength();
