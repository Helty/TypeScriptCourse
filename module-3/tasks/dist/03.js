// Создать функцию для суммирования двух значений sum2(). Функция должна возвращать функцию которая возвращает сумму двух чисел
// Пример sum2(40)(2) // 42
var sum2 = function (first) {
    return function (second) {
        return first + second;
    };
};
console.log(sum2(40)(2));
