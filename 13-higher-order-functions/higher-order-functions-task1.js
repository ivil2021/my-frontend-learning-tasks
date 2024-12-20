/*
Задача 1: 
Создайте функцию processNumbers,
которая принимает массив чисел и две функции в качестве аргументов:
одну для обработки чисел (например, возведение в квадрат),
а другую — для фильтрации (например, для получения только четных чисел).
Внутри функции примените переданные функции к массиву и верните результат.
*/

function squareNumber(numbers) {
    const squaredNumbers = numbers.map(item => item ** 2);

    console.log(squaredNumbers);
}

function filterEvenNumber(numbers) {
    const filteredNumbers = numbers.filter(item => item % 2 == 0);

    console.log(filteredNumbers);
}

function processNumbers(numbersArray, squareNumber, filterEvenNumber) {
    squareNumber(numbersArray);
    filterEvenNumber(numbersArray);
}

processNumbers([1, 2, 3, 4, 5], squareNumber, filterEvenNumber);