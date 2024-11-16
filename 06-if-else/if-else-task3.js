/*
Задача 3: 
Создайте программу, которая запрашивает у пользователя текущее время 
(только часы в 24-часовом формате, от 0 до 23) и выводит соответствующее сообщение:
Если время от 0 до 5, выведите "Доброй ночи".
Если от 6 до 11, выведите "Доброе утро".
Если от 12 до 17, выведите "Добрый день".
Если от 18 до 23, выведите "Добрый вечер".
*/

// const currentTime = prompt('Который сейчас час?');

function checkTime(currentTime) {
    if (currentTime <= 5) {
        console.log("Доброй ночи");
    } else if (6 <= currentTime <= 11) {
        console.log("Доброе утро");
    } else if (12 <= currentTime <= 17) {
        console.log("Добрый день");
    } else if (18 <= currentTime <= 23) {
        console.log("Добрый вечер");
    }
}

checkTime(3);
checkTime(9);
checkTime(14);
checkTime(20);