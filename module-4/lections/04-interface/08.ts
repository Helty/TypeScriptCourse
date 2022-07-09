function createArray(n: number| number[]) {
    if (typeof n === 'number') {
        return new Array(n)
    }
    return n
}

console.log(createArray(10))
console.log(createArray([1, 2, 3]))

