/*
Задача 3: 
Напишите функцию mergeObjects(obj1, obj2),
которая возвращает новый объект, состоящий из свойств двух объектов.
Если ключи совпадают, использовать значение из второго объекта.
*/

function mergeObjects(obj1, obj2) {
    const mergedObject = Object.assign(obj1, obj2);

    console.log(mergedObject);    
}

mergeObjects({name: "Ann", age: 25, isAdmin: true}, {name: "Tom", age: 52});