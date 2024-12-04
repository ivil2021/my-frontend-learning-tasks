/*
Задача 7: 
Напишите функцию getDiscount(isMember, isSale), которая возвращает скидку:
Если пользователь является членом клуба (isMember) и сейчас распродажа (isSale), скидка – 20%.
Если только одно из условий выполнено – скидка 10%.
В остальных случаях – 0%.
Используйте операторы &&, ||, ?:.
*/

function getDiscount(isMember, isSale) {
    let discount = isMember && isSale ? 20 :
        isMember || isSale ? 10 :
        0;

    console.log(discount);
}

getDiscount(true, true);
getDiscount(true, false);
getDiscount(false, true);
getDiscount(false, false);