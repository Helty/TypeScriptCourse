// Написать функцию sum для суммирования всх переданных аргументов
{
    function sum(...args) {
        return args.reduce((sum, num) => sum + num, 0)
    }

    console.log(sum(1, 2, 3))
}

// Добавить в объект функцию toString, которая выводит имя и возраст
{
    const user = {
        name: "UserName",
        age: 18,
    }
    user.toString = function () {
        return `${this.name} ${this.age}`
    }

    console.log(user.toString())
}

// Создать функцию для суммирования двух значений sum2(). Функция должна возвращать функцию которая возвращает сумму двух чисел
// Пример sum2(40)(2) // 42
{
    const sum2 = (a: number) => (b: number): number => a + b
    console.log(sum2(40)(2))
}

// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле
{
    class Page {
        constructor(
            protected name,
        private url
    ) {}

    open() {
    console.log(`Переход на страницу ${this.name}: ${this.url}`)
}
}

    const page1 = new Page("Google", 'https://google.com')
    page1.open()

    const page2 = new Page("Yandex", 'https://yandex.ru')
    page2.open()
}

// Создать класс SearchEnginePage, который наследуется от Page и реализует новый метод search(text) - который выводит "поиск по <NAME>: <text>"
{
    class Page {
        constructor(
            protected name,
        private url
    ) {}

    open() {
    console.log(`Переход на страницу ${this.name}: ${this.url}`)
}
}

    class SearchEnginePage extends Page {
        constructor(name: string, url: string) {
            super(name, url);
        }

        search(text: string) {
            console.log(`поиск по ${this.name}: ${text}`)
        }
    }

    const page1 = new SearchEnginePage("Google", 'https://google.com')
    page1.open()
    page1.search("car")

    const page2 = new SearchEnginePage("Yandex", 'https://yandex.ru')
    page2.open()
    page2.search("car")
}

// Создать класс Calculator имеет 4 метода (add, sub, mul, div и getValue). Конструктор принимает опциональное начальное значение
// Объект должен поддерживать chain
// Пример (new Calculator()).add(5).sub(4).mul(6).div(2)
{
    class Calculator {
        protected value;
        constructor(initValue = 0) {
            this.value = initValue
        }

        add(num: number) {
            this.value += num
            return this
        }
        sub(num: number) {
            this.value -= num
            return this
        }
        mul(num: number) {
            this.value *= num
            return this
        }
        div(num: number) {
            this.value /= num
            return this
        }
        getValue() {
            return this.value
        }
    }

    const cal = new Calculator()
    console.log(cal.add(5).sub(4).mul(6).div(2).getValue())
}
