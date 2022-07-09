function timer(sec: number) {
    //return new Promise(resolve => resolve(1))
    return new Promise(resolve => {
        setTimeout(resolve, sec * 1000, 42)
    })
}

timer(2).then(console.log)
