class Rectangle {
    static nameClass:string = 'Rectangle';

    constructor(public width: number, public height: number) {
    }

    toString() {
        return `${Rectangle.nameClass}: ${this.width} ${this.height}`;
    }

    static copy(rectangle: Rectangle) {
        return new Rectangle(rectangle.width, rectangle.height);
    }
}

const r1 = new Rectangle(10, 20);
const r2 = Rectangle.copy(r1);
console.log(r1.toString());
console.log(r2.toString());

r2.height = 200
console.log(r1.toString());
console.log(r2.toString());

