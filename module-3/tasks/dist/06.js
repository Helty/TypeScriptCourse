// Создать класс Calculator имеет 4 метода (add, sub, mul, div и getValue). Конструктор принимает опциональное начальное значение
// Объект должен поддерживать chain
// Пример (new Calculator()).add(5).sub(4).mul(6).div(2).getValue() // 3
var Calculator = /** @class */ (function () {
    function Calculator(initValue) {
        if (initValue === void 0) { initValue = 0; }
        this.value = initValue;
    }
    Calculator.prototype.add = function (num) {
        this.value += num;
        return this;
    };
    Calculator.prototype.sub = function (num) {
        this.value -= num;
        return this;
    };
    Calculator.prototype.mul = function (num) {
        this.value *= num;
        return this;
    };
    Calculator.prototype.div = function (num) {
        if (num != 0) {
            this.value /= num;
        }
        return this;
    };
    Calculator.prototype.getValue = function () {
        return this.value;
    };
    return Calculator;
}());
console.log(new Calculator().add(5).sub(4).mul(6).div(2).getValue());
