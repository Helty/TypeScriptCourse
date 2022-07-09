const user = {
    name: 'Jeck',
    show: function () {
        console.log(`My name is ${this.name}!!!`)
    }
};
user.show(); //My name is Jeck!!!

function callFunction(fn: () => void) {
    fn()
}

callFunction(user.show) //My name is undefined!!!
