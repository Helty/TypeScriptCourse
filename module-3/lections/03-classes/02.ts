class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    scale(value: number) {
        this.width *= value;
        this.height *= value;
    }
}


const rectangle = new Rectangle(100, 200);
rectangle.scale(2)
console.log(rectangle) //Rectangle {width: 200, height: 400}
