/*
Задача 2: 
Напишите функцию getExpensiveProducts(products, minPrice),
которая принимает массив объектов products (с полями name и price) и минимальную цену minPrice.
Функция должна вернуть массив названий товаров, цена которых выше заданной.
*/

function getExpensiveProducts(products, minPrice) {
    const filteredNamesExpensiveProducts = products.filter(item => item.price > minPrice).map(item => item.name);

    console.log(filteredNamesExpensiveProducts);
}

getExpensiveProducts([ {name: "apple", price: 25}, {name: "banana", price: 30}, {name: "cherry", price: 20} ], 23);