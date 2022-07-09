// Дописать функцию для подсчета суммы нечетных чисел в массиве
function sumOdd(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num % 2 === 1)
            sum += num;
    }
    return sum;
}
var nums = [1, 2, 3];
console.log(sumOdd(nums)); // 4
