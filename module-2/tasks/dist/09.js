var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Скопировать объект в user2 использует спред оператор
var user = {
    name: "UserName",
    age: 42
};
var user2 = __assign({}, user);
console.log(user2);
//почитать про спред опреатор
