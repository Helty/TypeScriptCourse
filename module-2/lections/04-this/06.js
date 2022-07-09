function User(name) {
    this.name = name
}
User.prototype.show = function () {
    console.log(`Name: ${name}`)
}

User.prototype.show1 = "123"

const user1 = new User('Jack')
const user2 = new User('Peeter')
console.log(user1.show === user2.show) // false
console.log(user1.show1) // 123
