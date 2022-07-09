// Написать функцию которая меняет key и value местами.
// Гарантируется что в исходном объект value уникальны
function objectReverse(obj) {
    var result = {};
    for (var value in obj)
        result[obj[value]] = value;
    return result;
}
var group = {
    Jek: "18",
    Peeter: "20",
    Anna: "27"
};
console.log(objectReverse(group));
