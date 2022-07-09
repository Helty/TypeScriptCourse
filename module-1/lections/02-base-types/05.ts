// литералы логического типа
true;
false;

// Присвоение boolean
const isFoo = true;
console.log(isFoo)

// Операторы сравнения
console.log(1 < 2)
console.log(1 <= 2)
console.log(1 > 2)
console.log(1 >= 2)
console.log(1 === 1)
// @ts-ignore
console.log(1 === '1')
// @ts-ignore
console.log(1 == '1')
console.log(1 != 1)
console.log(true && true) // true
console.log(true && true && false) // false
console.log(true && 1 && 3) // 3
console.log(true && 1 && false && 3) // false
console.log(true || false) //true
console.log(false || 1) // 1
console.log(!true)
// тернарный оператор
console.log(true ? 1 : 0) // 1
