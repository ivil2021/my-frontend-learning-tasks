/*
Задача 3: 
Дан массив цен [100, 200, 300, 400]. 
Используя reduce, найдите общую сумму всех цен со скидкой 20% на каждый товар.
*/

const prices = [100, 200, 300, 400];

const changedPrices = prices.reduce(function(sum, current) {
    return sum + 0.8 * current;
}, 0);

console.log(changedPrices);