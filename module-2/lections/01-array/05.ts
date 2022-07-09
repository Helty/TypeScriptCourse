const numbers = [18, 24, 42]
for (const index in numbers) {
    console.log(index, numbers[index])
}
console.log('-'.repeat(20))

for (const value of numbers) {
    console.log(value)
}
console.log('-'.repeat(20))

for (let i = 0; i < numbers.length; i++) {
    console.log(i, numbers[i])
}
console.log('-'.repeat(20))

numbers.forEach(value => console.log(value))
