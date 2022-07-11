// Создать функцию, которая возвращает промис, который резолвится через n миллисекунд.
function resolveAfter(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n, 200);
    });
}
resolveAfter(5000).then(function (data) { return console.log(data); });
