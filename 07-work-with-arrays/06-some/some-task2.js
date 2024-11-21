/*
Задача 2: 
Дан массив строк [ "apple", "banana", "cherry" ].
Используя some, проверьте, содержит ли хотя бы одна строка букву "z".
*/

const fruits = [ "apple", "banana", "cherry" ];

const isIncludeLetterZ = fruits.some(item => item.includes("z"));

console.log(isIncludeLetterZ);