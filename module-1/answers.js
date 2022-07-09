// Объявить переменную типа Number и затем присвоить ей значение 42
{
    let universe: Number;
    universe = 42
}

// Создать переменную и присвоить ей значение 3.14(значение не будет изменяться)
{
    const pi: Number = 3.14
}

// Объявить два переменных a равной 42 и b равной 3. Вывести их сумму, разность, произведения и частное.
// Для вывода использовать console.log(<выражение>)
{
    const a = 42
    const b = 3
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}

// Создать переменную js, присвоить ей значение стоки "JavaScript". Вывести в консоль "I like Javascript".
// Использовать строковую интерполяцию
{
    const js = 'JavaScript'
    console.log(`I like ${js}`)
}

// Доработать приложение. Создать еще одну переменную со значением "TypeScript". Вывести "I like Javascript and TypeScript".
// Использовать строковую интерполяцию
{
    const js = 'JavaScript'
    const ts = 'TypeScript'
    console.log(`I like ${js} and ${ts}`)
}

// Создать строковые переменные a и b. Присвоить им "4" и "2". Вывести их сумму
{
    const a = '4'
    const b = '2'
    console.log(a + b)
}

// Создать переменную isEmpty, присвоить ей значение true
{
    const isEmpty = true
    console.log(isEmpty)
}

// Создать строку js со значением "JavaScript", сохранить значение равенства длины строки js c 10. Вывести полученный результат
{
    const js = 'JavaScript'
    const isEqual = js.length === 10
    console.log(isEqual)
}

// Дописать таблицу истинности для операции || и !(не) для a
{
    let a = false
    let b = false
    console.log(`a\tb\ta&&b\ta||b\t!a`)
    console.log(`${a}\t${b}\t${a && b}`)
    a = false
    b = true
    console.log(`${a}\t${b}\t${a && b}`)
    a = true
    b = false
    console.log(`${a}\t${b}\t${a && b}`)
    a = true
    b = true
    console.log(`${a}\t${b}\t${a && b}`)
}

// Создать программку для проверки ограничения возраста если меньше 18, то вывести "Страница не доступна" иначе "Страница доступна".
// Использовать if else
{
    const age = 18
    if (age < 18) {
        console.log('Страница не доступна')
    } else {
        console.log('Страница доступна')
    }
}

// Изменить программу используя тернарный оператор
{
    const age = 18
    const message = age < 18
        ? 'Страница не доступна'
        : 'Страница доступна'
    console.log(message)
}

// Вывести сообщение, исходя из температуры
// до -10 - Очень Холодно
// от -10 - +10 - Холодно
// от +10 - +18 - Прохладно
// от +18 - +25 - Тепло
// от +25 и выше - Жарко
{
    const t = Math.floor(Math.random() * 50) - 20
    console.log(`Текущая температура: ${t}`)

    if (t < -10) {
        console.log('Очень Холодно')
    } else if (t > -10 && t <= 10) {
        console.log('Холодно')
    } else if (t > 10 && t <= 18) {
        console.log('Прохладно')
    } else if (t > 18 && t <= 25) {
        console.log('Тепло')
    } else if (t > 25) {
        console.log('Жарко')
    }
}

// Доработать таблицы истинности. Сделать вывод через for. Не использовать массивы!!!
{
    console.log(`a\tb\ta&&b\ta||b\t!a`)
    for(let i = 0; i < 4; i++) {
        const a = i === 2 || i === 3
        const b = i === 1 || i === 3
        console.log(`${a}\t${b}\t${a && b}`)
    }
}

// Вывести n чисел в не четной последовательность 1 3 5 7 ... (не четность определяется i % 2 === 1).
// Для хранения результата использовать строку
{
    const n = 10
    let rst = ""
    let i = 1
    while (i !== n) {
        if (i % 2 === 1) {
            rst += i + " "
        }
        i++
    }
    console.log(rst)
}

// Создать функцию sum для сложения двух чисел
{
    function sum(a: number, b: number) {
        return a + b
    }
    console.log(sum(40, 2))
}

// Создать функцию для генерации последовательность 1 3 5 7, сигнатура (n: Number) => string
{
    function odd(n: Number): string {
        let rst = ""
        let i = 1
        while (i !== n) {
            if (i % 2 === 1) {
                rst += i + " "
            }
            i++
        }
        return rst
    }

    console.log(odd(10))
    console.log(odd(100))
}

// Создать функцию для генерации селектора для выбора элементов по data-at="id=header". сигнатура (id: string) => string
function dataAt(id: string) {
    return `[data-at*="id=${id}]"`
}
console.log(dataAt('header'))

