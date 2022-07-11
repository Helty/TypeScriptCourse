// Доработать предыдущую функцию. Добавить опциональный 2-ой аргумент, отвечающий за то, через сколько промис реджектится.
function resolveAfter(n, nErr) {
    if (nErr === void 0) { nErr = 10000; }
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, n, 200);
        setTimeout(reject, nErr, 404);
    });
}
//true
resolveAfter(5000, 6000).then(function (data) { return console.log(data); }, function (error) { return console.log(error); });
//true
resolveAfter(5000).then(function (data) { return console.log(data); }, function (error) { return console.log(error); });
//false
resolveAfter(5000, 4000).then(function (data) { return console.log(data); }, function (error) { return console.log(error); });
