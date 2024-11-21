/*
Задача 3: 
Дан массив строк [ "apple", "banana", "cherry" ].
Используя find, найдите первую строку, которая содержит букву "a".
*/

const fruits = [ "apple", "banana", "cherry" ];

const foundFruit = fruits.find(item => item.includes("a"));

console.log(foundFruit);