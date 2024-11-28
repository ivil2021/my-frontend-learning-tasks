/*
Задача 3: 
Напишите функцию getLongWords(words, minLength),
которая принимает массив строк words и минимальную длину слова minLength.
Функция должна вернуть массив слов, длина которых больше или равна minLength.
*/

function getLongWords(words, minLength) {
    const longWords = words.filter(item => item.length >= minLength);

    console.log(longWords);
}

getLongWords(["I", "love", "JavaScript"], 4);