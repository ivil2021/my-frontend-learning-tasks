/*
Задача 1: 
У вас есть массив чисел [1, 2, 3, 4, 5]. 
Найдите их сумму с помощью reduce.
*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce(function(sum, current) {
    return sum + current;
}, 0);

console.log(result);