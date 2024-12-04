/*
Задача 5: 
Напишите функцию getName(user),
которая принимает объект user и возвращает его имя.
Если у пользователя имени нет, верните "Аноним", используя оператор ??.
*/

function getName(user) {
    const userName = user.name ?? "Аноним";

    console.log(userName);
}

getName({name: "John", age: 25});
getName({name: null, age: 25});
getName({name: undefined, age: 25});