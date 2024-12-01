/*
Задача 3: 
Напишите функцию hasStudentsWithLowGrades(students, minGrade),
которая принимает массив объектов students (с полями name и grade) и минимальный балл minGrade.
Функция должна вернуть true, если есть хотя бы один студент с оценкой ниже заданной,
и false в противном случае.
*/

function hasStudentsWithLowGrades(students, minGrade) {
    const isStudentWithLowGrade = students.some(item => item.grade < minGrade);

    console.log(isStudentWithLowGrade);
}

hasStudentsWithLowGrades([ {name: "John", grade: 5}, {name: "Anna", grade: 3}, {name: "Mike", grade: 4} ], 6);