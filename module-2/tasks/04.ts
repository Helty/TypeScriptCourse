// вывести матрицу
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix) {
  let colRes: string = "";
  for (let col of row) colRes += col + " ";
  console.log(colRes);
}
