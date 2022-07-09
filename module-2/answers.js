// Вывести список ролей через for
{
    const roles = ['owner', 'admin', 'reviewer']
    for (const role of roles) {
        console.log(role)
    }
}

// Добавить роль 'viewer' в конец массива
{
    const roles = ['owner', 'admin', 'reviewer']
    roles.push('viewer')
    console.log(roles)
}

// Создать функцию для подсчета суммы только нечетных чисел в массиве
{
    function sumOdd(arr: number[]): number {
        let sum = 0
        for(let value of arr) {
            if (value % 2 === 1) {
                sum += value
            }
        }
        return sum
    }

    const nums = [1, 2, 3]
    console.log(sumOdd(nums))
}

// вывести матрицу
{
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]

    for (let line of matrix) {
        let rst = ''
        for (let j of line) {
            rst += j + ' '
        }
        console.log(rst)
    }
}

// Написать функцию, которая убирает дублирование в массиве строк
{
    function uniq(arr: string[]): string[] {
        const rst: string[] = []
        for (let value of arr) {
            if (rst.indexOf(value) === -1) {
                rst.push(value)
            }
        }

        return rst
    }

    const users = ['user1', 'user2', 'user3', 'user2']
    console.log(uniq(users))
}

// Cоздать объект user c полями name, age. Вывести фразу "Меня зовут <Имя>, мне <Возраст>"
{
    const user = {
        name: "UserName",
        age: 42
    }
    console.log(`Меня зовут ${user.name}, мне ${user.age}`)
}

// Подсчитать средний возраст группы
{
    const group = {
        Jek: 18,
        Peeter: 20,
        Anna: 27
    }

    let sum = 0
    for (let name in group) {
        sum += group[name]
    }
    console.log(sum/Object.keys(group).length)
}

// Создать функцию конструктор для создания пользователя с полями name, age. Добавить метод toString, который выводит данные в строку
{
    function User(name: string, age: number) {
        this.name = name
        this.age = age
    }

    User.prototype = {
        toString: function () {
            return `${this.name}, ${this.age}`
        }
    }

    const user = new User('Name', 18)
    console.log(user.toString())
}

// Скопировать объект в user2 использует спред оператор
{
    const user = {
        name: "UserName",
        age: 42
    }
    const user2 = {...user}
    console.log(user2)
}

// Написать функцию которая меняет key и value местами. Гарантируется что в исходном объект value уникальны
{
    const group = {
        Jek: '18',
        Peeter: '20',
        Anna: '27'
    }

    function objectReverse(obj: Record<string, string>):Record<string, string> {
        const rst = {}
        for (let value in obj) {
            rst[obj[value]] = value
        }
        return rst
    }

    console.log(objectReverse(group))
}

// Создать функцию для подсчета кол-ва свойств в объекте
{
    function count(obj) {
        return Object.keys(obj).length
    }

    const group = {
        Jek: '18',
        Peeter: '20',
        Anna: '27'
    }
    console.log(count(group))
}

// скопировать свойства объекта в переменные
{
    const user = {
        name: "UserName",
        age: 42
    }

    const {name, age} = user
    console.log(name, age)
}

// Данные о пользователе хранятся в массиве. В первой ячейки хранится имя, а в третей возраст. Скопируйте эти значения
{
    const user = ['UserName', 'male', 42]
    const [name, , age] = user
    console.log(name, age)
}
