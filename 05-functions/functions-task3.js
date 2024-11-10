/*
Задача 3: 
Создайте функцию calculateArea, которая принимает два аргумента: width (ширина) и height (высота). 
Функция должна возвращать площадь (width * height). 
Если аргумент height не передан, задайте ему значение по умолчанию равное ширине, 
чтобы функция могла также вычислять площадь квадрата. 
Вызовите функцию с двумя аргументами для прямоугольника и с одним аргументом для квадрата, 
например, calculateArea(5, 10) и calculateArea(7).
*/

function calculateArea(width, height = width) {
    const area = width * height;

    return area;
}

const rectangleArea = (calculateArea(5, 10));
const squareArea = (calculateArea(7));

console.log('Rectangle area: ', rectangleArea);
console.log('Square area: ', squareArea);