/**
 * Created by anton on 04-Nov-16.
 */
function solve() {
    class Figure{
        constructor(){
            if(new.target === Figure) throw new Error("Can not create an instance of an abstract class!\n")
        }
        get area(){}
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * this.radius * this.radius;
        }

        toString(){
            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.height * this.width;
        }

        toString(){
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {Figure, Circle, Rectangle};
}

let classes = solve();
let Figure = classes.Figure;
let Circle = classes.Circle;
let Rectangle = classes.Rectangle;
let c1 = new Circle(10);
console.log(c1.area);
console.log(c1.toString());

let r1 = new Rectangle(2, 3);
console.log(r1.area);
console.log(r1.toString());