const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42)
    }, 0)

    reject('error')
})

console.log(p) //Promise { <rejected> 'error' }
