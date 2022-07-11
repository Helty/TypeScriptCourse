// Создать интервальный таймер, который выводит секунды с момента старта
let secAfterStart: number = 0;

function printSecAfterStart(sec: number) {
  console.log(sec);
}

const timerId = setInterval(() => {
  secAfterStart += 1;
  printSecAfterStart(secAfterStart);
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
}, 15000);
