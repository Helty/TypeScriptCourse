// Подсчитать средний возраст группы
function avgAge(group) {
    var sumAge = 0;
    for (var userName in group) {
        sumAge += group[userName];
    }
    return sumAge / Object.keys(group).length;
}
var group = {
    Jek: 18,
    Peeter: 20,
    Anna: 27
};
console.log(avgAge(group)); //21.666666
