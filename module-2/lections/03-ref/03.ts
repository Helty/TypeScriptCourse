const user1 = {
    name: 'Jeck'
}
const user2 = {
    name: 'Jeck'
}
const user3 = user1

console.log(user1 === user2) //false
console.log(user1 == user3) // true
console.log({} === {}) //false
