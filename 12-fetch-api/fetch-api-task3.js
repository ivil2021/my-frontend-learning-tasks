/*
Задача 3: 
Напишите функцию createPost, которая отправляет POST-запрос на URL
https://jsonplaceholder.typicode.com/posts с помощью Fetch API.
В теле запроса передайте объект с полями title, body и userId.
После успешного создания поста выведите его данные в консоль.
*/

async function createPost(URL) {
    const post = {
        title: 'title1',
        body: 'body1',
        userId: '123456789'
    };

    const response = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(post)
    });

    let result = await response.json();

    console.log(result);
}

createPost("https://jsonplaceholder.typicode.com/posts");