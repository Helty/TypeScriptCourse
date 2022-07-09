type Point = {
    x: number;
    y: number;
}

function move(point: Point, offset: Point) {
    return {
        x: point.x - offset.x,
        y: point.y - offset.y,
    }
}

function show(point: Point) {
    console.log(point.x, point.y)
}

const point = {
    x: 10,
    y: 20,
    z: 0,
}

const offset: Point = {
    x: 5,
    y: 10,
}

const newPoint = move(point, offset)
show(newPoint);


