// Создать функцию для суммирования двух значений sum2(). Функция должна возвращать функцию которая возвращает сумму двух чисел
// Пример sum2(40)(2) // 42

const sum2 =
  (first: number) =>
  (second: number): number =>
    first + second;
console.log(sum2(40)(2));
