function User(name, age) {
    this.name = name
    this.age = age
}

const user1 = new User('Jack', 42)
const user2 = new User('Jack', 42)
console.log(user1) //User { name: "Jack", age: 42}
console.log(user2) //User {name: "Jack", age: 42}
console.log(user1 === user2) //false
