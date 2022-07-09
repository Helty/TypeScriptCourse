class Rectangle {
    width: number
    height: number
    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }
}

const r1 = new Rectangle(100, 200);
const r2 = new Rectangle(200, 100);
console.log(Rectangle) //class Rectangle....
console.log(typeof Rectangle) //functoin
console.log(r1) //Rectangle{width: 100, height: 200}
console.log(r2) //Rectangle{width: 200, height: 100}
