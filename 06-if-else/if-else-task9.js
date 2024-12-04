/*
Задача 9: 
Напишите функцию getUserStatus(user), которая принимает объект user и возвращает статус пользователя:
Если у пользователя есть поле isAdmin со значением true, возвращается "Администратор".
Если есть поле isOnline со значением true, возвращается "Онлайн".
Если оба поля отсутствуют или равны false, возвращается "Оффлайн".
Используйте операторы ??, ||, &&.
*/

function getUserStatus(user) {
    let userStatus = user.isAdmin ? "Администратор" :
        user.isOnline ? "Онлайн" :
        "Оффлайн";

    console.log(userStatus);
}

getUserStatus({name: "John", isAdmin: true, isOnline: true});
getUserStatus({name: "John", isAdmin: false, isOnline: true});
getUserStatus({name: "John", isAdmin: false, isOnline: false});
getUserStatus({name: "John"});