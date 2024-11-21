/*
Задача 3: 
Создайте массив [100, 200, 300].
Используя forEach, увеличьте каждый элемент на 10% и выведите новый массив в консоль.
*/

const numbers = [100, 200, 300];
const changedNumbers = [];

numbers.forEach(item => changedNumbers.push(item + item/10));

console.log(changedNumbers);