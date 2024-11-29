/*
Задача 3:
Напишите функцию findCityByPopulation(cities, minPopulation),
которая принимает массив объектов cities (с полями name и population)
и минимальное значение населения minPopulation.
Функция должна вернуть первый объект города с населением больше или равным заданному.
*/

function findCityByPopulation(cities, minPopulation) {
    const foundCity = cities.find(item => item.population >= minPopulation);

    console.log(foundCity);
}

findCityByPopulation([ {name: "Rostov", population: 27}, {name: "Taganrog", population: 89}, {name: "Sochi", population: 14} ], 29);