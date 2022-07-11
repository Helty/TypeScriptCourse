// Создать интервальный таймер, который выводит секунды с момента старта
var secAfterStart = 0;
function printSecAfterStart(sec) {
    console.log(sec);
}
var timerId = setInterval(function () {
    secAfterStart += 1;
    printSecAfterStart(secAfterStart);
}, 1000);
setTimeout(function () {
    clearInterval(timerId);
}, 15000);
