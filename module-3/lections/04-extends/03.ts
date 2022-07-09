class CarsList {
    fetch():string {
        console.log('Получение данных с сервера')
        return '[car1, car2, car3]';
    }
}

class CarsListCache extends CarsList {
    private data: string = '';
    private counter: number;

    constructor(public limit: number) {
        super();
        this.counter = this.limit;
    }

    fetch(): string {
        if (this.counter === this.limit) {
            this.data = super.fetch()
        }
        this.counter--;

        if(this.counter === 0) {
            this.counter = this.limit;
        }

        return this.data;
    }
}

const carsListCache = new CarsListCache(3);

console.log(carsListCache.fetch())
console.log(carsListCache.fetch())
console.log(carsListCache.fetch())
console.log(carsListCache.fetch())
console.log(carsListCache.fetch())
console.log(carsListCache.fetch())
console.log(carsListCache.fetch())
console.log(carsListCache.fetch())

