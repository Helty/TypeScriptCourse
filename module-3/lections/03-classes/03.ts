class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height
    }

    get width() {
        return this._width
    }

    set width(width) {
        this._width = width;
    }

    get height() {
        return this._height
    }

    set height(height) {
        this._height = height;
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
