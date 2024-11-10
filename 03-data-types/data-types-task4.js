/*
Задача 4: 
Напишите программу, которая запрашивает у пользователя два числа и выводит их сумму. 
Используйте функцию prompt() для получения данных и обязательно преобразуйте строки в числа перед суммированием.
*/

let number1 = prompt('Enter your first number');
let number2 = prompt('Enter your second number');

let sum = Number(number1) + Number(number2);

console.log(sum);