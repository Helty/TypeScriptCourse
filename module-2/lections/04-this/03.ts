const user = {
    name: 'Jack',
    age: 42,
    show: function () {
        console.log(`My name is ${this.name}!!!`)
    }
}

user.show() // My name is Jack!!!
