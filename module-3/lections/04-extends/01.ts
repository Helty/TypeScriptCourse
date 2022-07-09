abstract class Shape {
    abstract square(): number;
}


class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }
    square(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(public r: number) {
        super();
    }

    square(): number {
        return Math.PI * this.r**2;
    }
}


const circle: Shape = new Circle(10)
const rect: Shape = new Rectangle(10, 20)

console.log('Circle', circle.square())
console.log('Rectangle', rect.square())
