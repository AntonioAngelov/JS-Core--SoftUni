/**
 * Created by anton on 01-Nov-16.
 */
class Point{
    constructor(newX, newY){
        this.x = newX;
        this.y = newY;
    }

    static distance(a, b){
        const distanceX = a.x - b.x;
        const distanceY = a.y - b.y;
        return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    }
}

let point1 = new Point(0, 0);
let point2 = new Point(1, 1);
console.log(Point.distance(point1, point2));