/*
Задача 3: 
Дано: массив чисел [3, 6, 9, 12, 15]. 
Используя filter, оставьте только те числа, которые делятся на 3.
*/

const numbers = [3, 6, 9, 12, 15];

const filteredNumbers = numbers.filter(function(item) {
    if (item % 3 == 0) {
        return item;
    }
});

console.log(filteredNumbers);