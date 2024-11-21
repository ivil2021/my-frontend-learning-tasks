/*
Задача 2: 
В массиве объектов пользователей
[{name: "John", age: 25}, {name: "Anna", age: 30}, {name: "Mike", age: 20}]
найдите первого пользователя, возраст которого больше 20.
*/

const users = [{name: "John", age: 25}, {name: "Anna", age: 30}, {name: "Mike", age: 20}];

const foundUser = users.find(item => item.age > 20);

console.log(foundUser);