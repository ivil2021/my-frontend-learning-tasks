/*
Задача 2: 
Напишите функцию findStudentByGrade(students, grade),
которая принимает массив объектов students (с полями name и grade) и оценку grade.
Функция должна вернуть имя первого студента с указанной оценкой.
Если таких студентов нет, вернуть undefined.
*/

function findStudentByGrade(students, grade) {
    const foundStudent = students.find(item => item.grade == grade);

    console.log(foundStudent?.name ?? undefined);
}

findStudentByGrade([ {name: "John", grade: 5}, {name: "Anna", grade: 3}, {name: "Mike", grade: 4} ], 3);