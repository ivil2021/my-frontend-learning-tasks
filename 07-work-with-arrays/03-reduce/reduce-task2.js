/*
Задача 2: 
Дано: массив строк ["apple", "banana", "cherry"]. 
Используя reduce, создайте строку с перечислением фруктов через запятую, 
например: "apple, banana, cherry".
*/

const fruits = ["apple", "banana", "cherry"];

const fullString = fruits.reduce(function(sum, current) {
    return sum + current + ', ';
}, 0);

console.log(fullString.slice(1).slice(0, -2));