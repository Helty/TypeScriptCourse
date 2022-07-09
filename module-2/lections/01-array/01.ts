const arr1 = new Array()
// литерал
const arr2:any = []

console.log(arr1) // []
console.log(arr2) // []
console.log(arr1 === arr2) // false

const arr3 = arr1
console.log(arr1 === arr3) // true
