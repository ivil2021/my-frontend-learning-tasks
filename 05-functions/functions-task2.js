/*
Задача 2: 
Создайте две функции: outerFunction и innerFunction. 
Пусть outerFunction объявляет переменную message со значением "Hello from outer!" 
и вызывает innerFunction. 
В innerFunction выведите значение message в консоль.
*/

function outerFunction() {
    const message = "Hello from outer!";

    innerFunction(message);
}

function innerFunction(message) {
    console.log(message);
}

outerFunction();