/*
Задача 2: 
У вас есть массив строк [ "banana", "apple", "cherry" ].
Отсортируйте его в алфавитном порядке.
*/

const fruits = [ "banana", "apple", "cherry" ];

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));

console.log(sortedFruits);