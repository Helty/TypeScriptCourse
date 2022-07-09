const rst = (function (a, b) {
    return a + b
})(1, 2)

console.log(rst)
console.log((function (a, b) {
    return a + b
})(1, 2))
