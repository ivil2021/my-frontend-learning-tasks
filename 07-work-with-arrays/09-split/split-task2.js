/*
Задача 2: 
Напишите функцию countWords(text),
которая принимает строку text и возвращает количество слов в ней.
Используйте метод split, чтобы разбить строку на слова.
*/

const countWords = (text) => console.log(text.split(" ").length);

countWords("I love JavaScript");