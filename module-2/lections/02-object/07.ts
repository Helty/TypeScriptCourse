const user = {
    name: 'Jack',
    age: undefined
}

// @ts-ignore
console.log(user.value) // undefined
// @ts-ignore
console.log(user.value === undefined) // true
console.log(user.age === undefined) // true
console.log('age' in user) // true
console.log('value' in user) //false
