/*
Задача 1: 
Напишите функцию hasExpensiveProducts(products, minPrice),
которая принимает массив объектов products (с полями name и price) и минимальную цену minPrice.
Функция должна вернуть true, если есть хотя бы один товар, цена которого превышает заданное значение,
и false в противном случае.
*/

function hasExpensiveProducts(products, minPrice) {
    const isProductFound = products.some(item => item.price > minPrice);

    console.log(isProductFound);
}

hasExpensiveProducts([ {name: "apple", price: 25}, {name: "banana", price: 30}, {name: "cherry", price: 20} ], 36);