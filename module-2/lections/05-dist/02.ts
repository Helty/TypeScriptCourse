const numbers = [1, 2, 3]
const [one, ...other] = numbers
console.log(other) // [2, 3]
const numbers2 = [...numbers]
console.log(numbers === numbers2) //false

const user = {
    name: 'Jeck',
    age: 42,
    inn: 123456789
}

const {name: string, ...others} = user
console.log(others) // {age: 42, inn: 123456789}
const copyUser = {...user}
console.log(user === copyUser) // false
