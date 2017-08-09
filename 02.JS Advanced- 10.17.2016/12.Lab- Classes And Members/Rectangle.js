/**
 * Created by anton on 01-Nov-16.
 */
class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.width * this.height;
    }
}

let r1 = new Rectangle(1,2,"red");
console.log(r1.calcArea());