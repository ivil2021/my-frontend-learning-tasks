/*
Задача 3: 
Дано: массив цен [100, 200, 300]. 
Используя map, создайте новый массив, где к каждой цене добавлен налог 10%.
*/

const prices = [100, 200, 300];

let changedPrices = prices.map(function(item) {
    item  = item + item / 10;

    return item;
});

console.log(changedPrices);