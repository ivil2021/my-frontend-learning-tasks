/*
Задача 2: 
Создайте массив объектов, представляющих автомобили, с полями make, model и year.
Преобразуйте этот массив в строку формата JSON.
Затем измените один из объектов (например, добавьте поле color)
и снова преобразуйте массив в JSON, чтобы увидеть изменения.
Выведите конечную строку в консоль.
*/

const cars = [{make: "Audi"}, {model: "TT"}, {year: 2003}];

const carsWithColor = [{make: "Audi"}, {model: "TT"}, {year: 2003}, {color: "blue"}];

const stringifyArray = (array) => console.log(JSON.stringify(array));

stringifyArray(cars);
stringifyArray(carsWithColor);