/*
Задача 3: 
Дано массив объектов [{name: "John"}, {name: "Anna"}, {name: "Mike"}].
Создайте стрелочную функцию getNames, которая принимает такой массив
и возвращает массив имен (только значения name).
Вызовите функцию getNames для примера выше.
Ожидаемый результат: ["John", "Anna", "Mike"].
*/

const getNames = (users) => console.log(users.map(item => item.name));

getNames([{name: "John"}, {name: "Anna"}, {name: "Mike"}]);