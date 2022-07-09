function sum(...numbers: number[]) {
    return numbers.reduce((acc, curr) => acc + curr)
}
console.log(sum(1, 2, 3)) //6
