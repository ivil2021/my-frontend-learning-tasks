/*
Задача 1: 
Напишите функцию findProductByName(products, productName),
которая принимает массив объектов products (с полями name и price) и строку productName.
Функция должна вернуть объект товара с заданным именем.
Если товара нет, вернуть undefined.
*/

function findProductByName(products, productName) {
    const foundProduct = products.find(item => item.name == productName);

    console.log(foundProduct);
}

findProductByName([ {name: "apple", price: 25}, {name: "banana", price: 30}, {name: "cherry", price: 20} ], "banana");