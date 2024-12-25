/*
Задача 3: 
Создайте функцию filterAndMap, которая принимает массив строк и две функции:
одну для фильтрации (например, для получения строк длиной более 3 символов)
и другую для преобразования (например, для преобразования строк в верхний регистр).
Внутри функции сначала отфильтруйте массив,
а затем примените преобразование к оставшимся элементам, возвращая новый массив.
*/

function filterString(stringsArray) {
    const filteredStringsArray = stringsArray.filter(item => item.length > 3);

    console.log('filteredStringsArray: ', filteredStringsArray);
    return filteredStringsArray;
}

function capitalizeString(stringsArray) {
    const capitalizedStringsArray = stringsArray.map(item => item.toUpperCase());

    console.log('capitalizedStringsArray: ', capitalizedStringsArray);
    return capitalizedStringsArray;
}

function filterAndMap(stringsArray, filterString, capitalizeString) {
    const longStrings = filterString(stringsArray);
    capitalizeString(longStrings);
}

filterAndMap(["one", "two", "three", "four", "five"], filterString, capitalizeString);