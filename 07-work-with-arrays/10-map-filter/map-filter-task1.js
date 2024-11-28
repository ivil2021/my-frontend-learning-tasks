/*
Задача 1: 
Напишите функцию getAdults(people), которая принимает массив объектов с людьми
(каждый объект содержит свойства name и age) и возвращает массив имён людей старше 18 лет,
используя map и filter.
*/

function getAdults(people) {
    const filteredNamesOlder18 = people.filter(item => item.age > 18).map(item => item.name);

    console.log(filteredNamesOlder18);
}

getAdults([ {name: "John", age: 25}, {name: "Anna", age: 30}, {name: "Mike", age: 20} ]);