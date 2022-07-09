type sumType  = (a: number, b: number) => number;

const sum: sumType = (a:number, b:number) => {
    return a + b
}
console.log(sum(1, 2)) //3

//если функция возвращает выражение, то return и скобки можно опустить
const sum2: sumType = (a, b) => a + b
console.log(sum(1, 2)) // 3


//если нет параметров, то указать скобки
const log = () => console.log("Hello")
log()


//если один параметр, то скобки не нужны
const double = (n:number) => n * 2
console.log(double(2)) // 4
