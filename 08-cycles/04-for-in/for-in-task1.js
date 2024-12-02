/*
Задача 1: 
Создайте объект с ключами "name", "age", "city".
Используя for...in, выведите все ключи и значения объекта.
*/

const users = {
    name: "John",
    age: 23,
    city: "Rostov"
};

for (let key in users) {
    console.log(key);
    console.log(users[key]);
    console.log("-----");
}