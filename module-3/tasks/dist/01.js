// Написать функцию sum для суммирования всех переданных аргументов
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sum(4, 2, 3));
