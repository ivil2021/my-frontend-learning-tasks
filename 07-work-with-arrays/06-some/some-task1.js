/*
Задача 1: 
У вас есть массив чисел [1, 2, 3, 4, 5].
Используя some, проверьте, есть ли в массиве число больше 4.
*/

const numbers = [1, 2, 3, 4, 5];

const isIncludeNumberGreaterFour = numbers.some(item => item > 4);

console.log(isIncludeNumberGreaterFour);