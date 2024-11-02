/*
Задача 3: 
Создайте переменную isAdult, которая будет равна true или false в зависимости от значения другой переменной age. 
Если age больше или равно 18, isAdult должно быть true, иначе — false. 
Выведите isAdult в консоль.
*/

let age = 25;
let isAdult; 

if (age >= 18) {
    isAdult = true;
} else {
    isAdult = false;
}

console.log(isAdult);