/*
Задача 2: 
Создайте массив значений: ["", 0, "hello", null, undefined, 5, NaN]. 
Напишите программу, которая пройдёт по каждому элементу массива и преобразует его в булевый тип, 
после чего выведет исходное значение и результат преобразования в консоль.
*/

const differentTypesData = ["", 0, "hello", null, undefined, 5, NaN];

differentTypesData.forEach(function(item) {
    console.log(item);
    console.log(Boolean(item));
    console.log("-----");
});