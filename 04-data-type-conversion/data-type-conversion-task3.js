/*
Задача 3: 
Создайте объект user с информацией о пользователе: имя, возраст и статус (например, { name: "Анна", age: 25, isMember: true }).
Преобразуйте объект в строку с помощью JSON.stringify() и выведите результат в консоль.
Затем преобразуйте эту строку обратно в объект с помощью JSON.parse() и снова выведите результат в консоль.
*/

const userData = { name: 'Анна', age: 25, isMember: true };

console.log('Original user data');
console.log(userData);
console.log('');

const stringifiedUserData = JSON.stringify(userData);
console.log('Stringified user data');
console.log(stringifiedUserData);
console.log('');

const parsedUserData = JSON.parse(stringifiedUserData);
console.log('Parsed user data');
console.log(parsedUserData);