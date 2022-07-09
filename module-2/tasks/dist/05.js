// Написать функцию, которая убирает дублирование в массиве строк
function uniq(arr) {
    var uniqArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        if (uniqArr.indexOf(value) === -1)
            uniqArr.push(value);
    }
    return uniqArr;
}
var users = ["user1", "user2", "user3", "user2"];
console.log(uniq(users)); //['user1', 'user2', 'user3']
