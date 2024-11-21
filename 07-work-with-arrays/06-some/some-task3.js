/*
Задача 3: 
В массиве объектов
[{id: 1, completed: true}, {id: 2, completed: false}, {id: 3, completed: true}]
проверьте, есть ли хотя бы один элемент, у которого completed равен false.
*/

const myArray = [{id: 1, completed: true}, {id: 2, completed: false}, {id: 3, completed: true}];

const isAnyCompletedFalse = myArray.some(item => item.completed == false);

console.log(isAnyCompletedFalse);