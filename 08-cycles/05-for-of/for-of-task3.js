/*
Задача 3: 
Создайте массив объектов,
где каждый объект содержит имя человека и его возраст.
Используя for...of, выведите имена всех людей старше 18 лет.
*/

const users = [ {name: "John", age: 25}, {name: "Anna", age: 30}, {name: "Mike", age: 20} ];

for (let user of users) {
    if (user.age > 18) {
        console.log(user.name);    
    }
}