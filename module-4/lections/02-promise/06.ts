const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42)
    }, 1000)

    setTimeout(() => {
        reject('error')
    }, 2000)

})

console.log(p) //Promise { <pending> }
