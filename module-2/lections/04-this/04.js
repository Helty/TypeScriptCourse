const user = {
    name: 'Jack',
    age: 42,
}

const showName = function () {
    console.log(`My name is ${this.name}!!!`)
}

const showLastName = function () {
    console.log(`My lastname is ${this.lastname}!!!`)
}

user.showName = showName
user.showLastName = showLastName

user.showName() // My name is Jack!!
user.showLastName() // My name is undefined!!!
user.lastname = "007"
user.showLastName() // My name is 007!!!
