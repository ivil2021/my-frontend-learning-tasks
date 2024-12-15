/*
Задача 1: 
Напишите функцию fetchUser,
которая использует Fetch API для получения данных о пользователе с URL
https://jsonplaceholder.typicode.com/users/1.
После получения данных, выведите имя пользователя и его email в консоль.
*/

async function fetchUser(URL) {
        const response = await fetch(URL);
        const data = await response.json();

        console.log('username:', data.username);
        console.log('email:', data.email);
}

fetchUser("https://jsonplaceholder.typicode.com/users/1");