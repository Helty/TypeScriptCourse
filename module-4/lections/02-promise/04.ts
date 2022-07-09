const p = new Promise((resolve, reject) => {
    resolve(42)
    reject('error')
})

console.log(p) //Promise { 42 }



