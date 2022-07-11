// Написать функцию sum для суммирования всех переданных аргументов
function sum(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}

console.log(sum(4, 2, 3));
