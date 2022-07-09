let a = 1;
let b = a

a++
console.log(a) // 2
console.log(b) // 1


const user1 = {
    name: 'Jeck'
}
const user2 = user1
user2.name = 'Peeter'
console.log(user1) // {name: 'Peeter'}
console.log(user2) // {name: 'Peeter'}

console.log({} === {})
console.log(user1 === user2)
