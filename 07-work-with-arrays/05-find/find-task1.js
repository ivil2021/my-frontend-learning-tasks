/*
Задача 1: 
У вас есть массив чисел [5, 12, 8, 130, 44].
Используя find, найдите первое число, которое больше 10.
*/

const numbers = [5, 12, 8, 130, 44];

const foundNumber = numbers.find(item => item > 10);

console.log(foundNumber);