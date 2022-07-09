const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42)
    }, 1000)

    setTimeout(() => {
        reject('error')
    }, 2000)

})

promise
    .then(
        data => {
            console.log(data)
            return Promise.resolve('foo')
        },
        error => console.log(error)
    )
    .then(data => console.log(data))

