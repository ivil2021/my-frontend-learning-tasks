/*
Задача 8: 
Напишите функцию getWeatherMessage(temp), которая принимает температуру и возвращает сообщение:
Если температура ниже 0 – "Очень холодно".
Если температура от 0 до 20 – "Прохладно".
Если выше 20 – "Тепло".
Используйте вложенные тернарные операторы.
*/

function getWeatherMessage(temp) {
    let weatherMessage = temp < 0 ? "Очень холодно" :
        temp >= 0 && temp <= 20 ? "Прохладно" :
        "Тепло";

    console.log(weatherMessage);
}

getWeatherMessage(-25);
getWeatherMessage(10);
getWeatherMessage(35);