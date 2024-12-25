/*
Задача 2: 
Напишите функцию createMultiplier,
которая принимает число factor и возвращает новую функцию.
Эта возвращаемая функция должна принимать одно число и умножать его на factor.
Проверьте работу createMultiplier, создав несколько множителей, например, для 2 и 3.
*/

function newFunction(number, factor) {
    console.log(number * factor);
    return number * factor;
}

function createMultiplier(number, factor) {
    return newFunction(number, factor);
}

createMultiplier(5, 2);
createMultiplier(5, 3);