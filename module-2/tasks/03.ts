// Дописать функцию для подсчета суммы нечетных чисел в массиве
function sumOdd(arr: number[]): number {
  let sum: number = 0;
  for (let num of arr) if (num % 2 === 1) sum += num;
  return sum;
}

const nums = [1, 2, 3];
console.log(sumOdd(nums)); // 4
