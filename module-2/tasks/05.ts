// Написать функцию, которая убирает дублирование в массиве строк
function uniq(arr: string[]): string[] {
  let uniqArr: string[] = [];
  for (const value of arr) {
    if (uniqArr.indexOf(value) === -1) uniqArr.push(value);
  }
  return uniqArr;
}

const users = ["user1", "user2", "user3", "user2"];
console.log(uniq(users)); //['user1', 'user2', 'user3']
