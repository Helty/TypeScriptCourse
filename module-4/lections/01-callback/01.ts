const callback = function (str: string) {
    console.log(`callback ${str}`)
}

console.log('start')
const timer = setTimeout(callback, 1000, 'foo')
console.log('end')
