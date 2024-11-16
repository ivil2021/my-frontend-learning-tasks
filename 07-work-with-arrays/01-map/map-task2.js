/*
Задача 2: 
У вас есть массив имен [ "anna", "ivan", "sergey" ]. 
Преобразуйте все имена так, чтобы они начинались с заглавной буквы.
*/

const userNames = [ "anna", "ivan", "sergey" ];

let capitalisedFirstLetters = userNames.map(function(item) {
    item  = item[0].toUpperCase() + item.slice(1);

    return item;
});

console.log(capitalisedFirstLetters);