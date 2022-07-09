function User(name) {
    this.name = name
    this.show = function () {
        console.log(`Name: ${name}`)
    }
}

const user1 = new User('Jack')
const user2 = new User('Peeter')
console.log(user1.show === user2.show) // false
