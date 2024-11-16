/*
Задача 2: 
В массиве имен [ "John", "Paul", "George", "Ringo" ] .
Отфильтруйте имена, которые короче 5 символов.
*/

const names = [ "John", "Paul", "George", "Ringo" ];

const filteredNames = names.filter(function(item) {
    if (item.length < 5 ) {
        return item;
    }
});

console.log(filteredNames);