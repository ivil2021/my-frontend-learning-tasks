/*
Задача 1: 
Создайте функцию countKeys(obj),
которая принимает объект и возвращает количество его ключей.
*/

function countKeys(obj) {
    let objectKeysCounter = 0;

    for (let key in obj) {
        objectKeysCounter++;
    }

    console.log(objectKeysCounter);
}

countKeys([ {name: "apple", price: 25}, {name: "banana", price: 30}, {name: "cherry", price: 20} ]);