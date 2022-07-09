// Создать функцию для генерации последовательность 1 3 5 7, сигнатура (n: Number) => string
function oddSequenceGeneration(n: number): string {
  let result: string = "";
  for (let i = 1; i <= n; i++) if (i % 2 === 1) result += i + " ";
  return result;
}

console.log(oddSequenceGeneration(10));
