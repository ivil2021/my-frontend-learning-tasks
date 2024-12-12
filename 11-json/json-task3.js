/*
Задача 3: 
Дано: строка в формате JSON, представляющая массив пользователей.
Используя JSON.parse(), преобразуйте эту строку в массив объектов
и выведите имена всех пользователей в консоль.
'[{"name": "John", "age": 25}, {"name": "Anna", "age": 30}, {"name": "Mike", "age": 20}]'
*/

const jsonString = '[{"name": "John", "age": 25}, {"name": "Anna", "age": 30}, {"name": "Mike", "age": 20}]';

const users = JSON.parse(jsonString);

const usersNames = users.map(item => item.name);

console.log(usersNames);