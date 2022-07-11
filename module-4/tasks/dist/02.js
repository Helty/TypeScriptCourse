// Создать функцию deferred, которая принимает выражение и callback. Если выражение true, то callback выполняется сразу иначе через 1сек
function printHi() {
    console.log("Hi");
}
function deferred(expression, callback) {
    setTimeout(callback, expression ? 0 : 1000);
}
deferred(true, printHi);
deferred(true, printHi);
deferred(false, printHi);
