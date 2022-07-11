// Добавить в объект функцию toString, которая выводит имя и возраст
var user = {
    name: "UserName",
    age: 18
};
user.toString = function () {
    return this.name + " " + this.age;
};
console.log(user.toString());
