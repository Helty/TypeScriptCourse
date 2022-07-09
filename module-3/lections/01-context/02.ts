const user = {
    name: 'Jeck',
    show: function () {
        console.log(`My name is ${this.name}!!!`)
    }
};

function callFunction(fn: () => void) {
    fn()
}

const show = user.show.bind(user)
callFunction(show) //My name is Jeck!!!
