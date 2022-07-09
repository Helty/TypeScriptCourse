function timer() {
    //return new Promise(resolve => resolve(1))
    return Promise.resolve(42)
}

timer().then(console.log)  //выведет 42
