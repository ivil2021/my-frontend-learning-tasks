/*
Задача 3: 
В массиве объектов
[ {name: "John", age: 25}, {name: "Anna", age: 30}, {name: "Mike", age: 20} ]
отсортируйте элементы по возрастанию возраста.
*/

const users = [ {name: "John", age: 25}, {name: "Anna", age: 30}, {name: "Mike", age: 20} ];

const usersSortedByAgeAscendingOrder = users.sort((a, b) => a.age - b.age);

console.log(usersSortedByAgeAscendingOrder);