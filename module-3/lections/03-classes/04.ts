class Rectangle {
    constructor(public width: number, public height: number) {
    }

    get square() {
        return this.width * this.height
    }
}

const rectangle = new Rectangle(100, 100);
console.log(rectangle.square);
rectangle.height = 10
rectangle.width = 20
console.log(rectangle.square);
