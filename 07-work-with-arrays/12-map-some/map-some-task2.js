/*
Задача 2: 
Напишите функцию areAllTasksCompleted(tasks),
которая принимает массив объектов tasks (с полями title и completed) и проверяет,
есть ли в списке хотя бы одна невыполненная задача.
Если все задачи выполнены, вернуть true.
*/

function areAllTasksCompleted(tasks) {
    const areAllTasksFinished = tasks.some(item => item.completed == false);

    console.log(!areAllTasksFinished);
}

areAllTasksCompleted([ {title: "task1", completed: true}, {title: "task2", completed: true}, {title: "task3", completed: true} ]);