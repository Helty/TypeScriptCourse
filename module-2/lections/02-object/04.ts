const user: any = {} // {}
user.name = 'Jack' // {name: "Jack"}
user.age = 18 // {name: "Jack", age: 18}
console.log(user) // {name: "Jack", age: 18}
delete user.age
console.log(user) // {name: "Jack"}
