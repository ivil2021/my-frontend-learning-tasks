/*
Задача 5: 
Напишите функцию removeProperties(obj, value),
которая удаляет из объекта все свойства,
значения которых равны переданному значению.
*/

function removeProperties(obj, value) {
    console.log("obj before: ", obj);

    delete obj[value];

    console.log("obj after: ", obj);
}

removeProperties({name: "Ann", age: 25, isAdmin: true}, "name");