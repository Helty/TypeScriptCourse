const sum = function (a:number, b:number) {
    return a + b
}

console.log(sum) // выведет код функции
console.log(sum(40, 2)) //42
let sum2 = sum
console.log(sum2(40, 2)) //42
