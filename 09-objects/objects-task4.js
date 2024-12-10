/*
Задача 4: 
Создайте функцию invertObject(obj),
которая создает новый объект,
меняя местами ключи и значения исходного объекта.
*/

function invertObject(obj) {
    const invertedObject = {};

    for (let key in obj) {
        invertedObject[obj[key]] = key;
    }

    console.log(invertedObject);
}
invertObject({name: "Ann", isAdmin: true});