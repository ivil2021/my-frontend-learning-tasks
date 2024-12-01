/*
Задача 3: 
Используя цикл while, вычислите сумму чисел от 1 до 50.
*/

let i = 0;
let sum = 0;

while (i < 50) {
    sum += i + 1;
    i++;
}

console.log(sum);