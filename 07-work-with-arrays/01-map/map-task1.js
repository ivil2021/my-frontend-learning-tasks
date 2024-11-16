/*
Задача 1: 
У вас есть массив чисел [1, 2, 3, 4, 5]. 
Используя map, создайте новый массив, где каждый элемент будет увеличен на 10.
*/

const numbersArray = [1, 2, 3, 4, 5];

let multipliedArray = numbersArray.map(function(item) {
    item  = item * 10;

    return item;
});

console.log(multipliedArray);