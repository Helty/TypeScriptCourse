const numbers = [1, 2, 3]
numbers.push(4)
console.log(numbers) // [1, 2, 3, 4]
console.log(numbers.pop()) // 4
console.log(numbers.pop()) // 3
console.log(numbers) // [1, 2]
numbers.unshift(4)
console.log(numbers) // [4, 1, 2]
numbers.unshift(42)
console.log(numbers) // [42, 4, 1, 2]
console.log(numbers.shift()) // 42
console.log(numbers) // [4, 1, 2]
