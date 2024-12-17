/*
Задача 2: 
Создайте функцию fetchPosts, которая загружает посты с URL
https://jsonplaceholder.typicode.com/posts.
Используйте Fetch API для получения данных
и выведите заголовки первых пяти постов в консоль.
*/

async function fetchPosts(URL) {
        const response = await fetch(URL);
        const posts = await response.json();

        posts.length = 5;

        posts.map((item, index) => console.log(`Post title ${index + 1}:`, item.title));
}

fetchPosts("https://jsonplaceholder.typicode.com/posts");