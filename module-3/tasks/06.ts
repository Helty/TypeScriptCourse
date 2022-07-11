// Создать класс Calculator имеет 4 метода (add, sub, mul, div и getValue). Конструктор принимает опциональное начальное значение
// Объект должен поддерживать chain
// Пример (new Calculator()).add(5).sub(4).mul(6).div(2).getValue() // 3

class Calculator {
  private value: number;
  constructor(initValue = 0) {
    this.value = initValue;
  }

  add(num: number) {
    this.value += num;
    return this;
  }
  sub(num: number) {
    this.value -= num;
    return this;
  }
  mul(num: number) {
    this.value *= num;
    return this;
  }
  div(num: number) {
    if (num != 0) {
      this.value /= num;
    }
    return this;
  }
  getValue() {
    return this.value;
  }
}

console.log(new Calculator().add(5).sub(4).mul(6).div(2).getValue());
