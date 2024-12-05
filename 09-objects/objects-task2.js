/*
Задача 2: 
Напишите функцию hasProperty(obj, key),
которая проверяет, есть ли у объекта свойство с заданным именем.
*/

function hasProperty(obj, key) {
    console.log(key in obj);
}

hasProperty({name: "Ann", age: 25}, "name");