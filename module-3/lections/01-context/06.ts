function sum(num1:number, ...numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr, num1)
}
console.log(sum(1, 2, 3)) //6
