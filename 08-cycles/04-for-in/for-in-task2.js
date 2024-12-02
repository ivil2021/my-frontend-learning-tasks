/*
Задача 2: 
Используя for...in, создайте функцию,
которая подсчитывает количество ключей в объекте.
*/

function calculateObjectKeysNumber(object) {
    let objectKeysCounter = 0;

    for (let key in object) {
        objectKeysCounter++;
    }

    console.log(objectKeysCounter);
}

calculateObjectKeysNumber([ {name: "apple", price: 25}, {name: "banana", price: 30}, {name: "cherry", price: 20} ]);