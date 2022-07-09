const arr1: number[] = [1, 2, 3] //number[]
const arr2 = [1, 2, 3]           //number[]

type MonthNumber = 1|2|3|4|5|6|7|8|9|10|11|12

// const months: MonthNumber[] = [1, 2, 10, 20]  //Error

// tuples
const pair: [MonthNumber, string] = [1, 'January'];
pair[0] // MonthNumber
pair[1] // string
