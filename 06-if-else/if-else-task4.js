/*
Задача 4: 
Напишите функцию isEven(num), которая проверяет, является ли число чётным,
и возвращает строку "Чётное" или "Нечётное", используя тернарный оператор.
*/

function isEven(num) {
    const isNumberEven = num % 2 == 0 ? "Чётное" : "Нечётное";

    console.log(isNumberEven);
}

isEven(2);
isEven(3);