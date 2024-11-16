/*
Задача 1: 
У вас есть массив чисел [5, 12, 8, 130, 44]. 
Отфильтруйте только числа больше 10.
*/

const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter(function(item) {
    if (item > 10 ) {
        return item;
    }
});

console.log(filteredNumbers);