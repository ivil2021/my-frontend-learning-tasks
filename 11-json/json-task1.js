/*
Задача 1: 
Создайте объект JavaScript с информацией о книге
(например, название, автор, год издания и жанр).
Преобразуйте этот объект в строку формата JSON с помощью JSON.stringify(),
а затем выведите полученную строку в консоль.
*/

const stringifyArray = (array) => console.log(JSON.stringify(array));

stringifyArray([{author: "Ivanov"}, {year: 2020}, {genre: "Adventure"}]);