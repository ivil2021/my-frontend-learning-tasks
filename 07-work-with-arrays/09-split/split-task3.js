/*
Задача 3: 
Напишите функцию getDomain(url), которая принимает строку url и возвращает доменное имя.
Считайте, что URL всегда начинается с http:// или https://, а после домена идёт /.
Используйте метод split.
*/

const getDomain = (url) => console.log(url.split("/")[(url.split("/").length - 2)]);

getDomain("https://google.com/");