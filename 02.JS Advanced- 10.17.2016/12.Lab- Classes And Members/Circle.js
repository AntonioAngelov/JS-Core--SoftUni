/**
 * Created by anton on 01-Nov-16.
 */
class Circle{
    constructor(newRadius){
        this.radius = newRadius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

let c1 = new Circle(2);
console.log(c1.area);
console.log(c1.diameter);
c1.diameter = 8;
console.log(c1.radius)