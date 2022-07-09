// Написать функцию, которая убирает дублирование в массиве строк
function uniq(arr: string[]): string[] {
    return arr
}

const users = ['user1', 'user2', 'user3', 'user2']
console.log(uniq(users)) //['user1', 'user2', 'user3']
