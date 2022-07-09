const p = new Promise((resolve, reject) => {
    reject('error')
})

console.log(p) // Promise { <rejected> error }


