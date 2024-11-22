/*
Задача 1: 
Дан массив чисел [5, 3, 8, 1, 2].
Отсортируйте его в порядке возрастания.
*/

const numbers = [5, 3, 8, 1, 2];

const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);