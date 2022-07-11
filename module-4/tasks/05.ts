// используя timeout написать функцию которая выводит секунды с момента старта. Использовать async/await

async function startTimer(countSeconds: number = Infinity) {
  let secAfterStart: number = 1;
  while (secAfterStart <= countSeconds) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(secAfterStart);
    secAfterStart += 1;
  }
}

startTimer(4);
