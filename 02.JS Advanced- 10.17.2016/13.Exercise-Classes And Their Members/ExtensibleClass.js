/**
 * Created by anton on 02-Nov-16.
 */
let obj = (function () {
    let count = 0;
    class Extensible{
        constructor(){
            this.id = count;
            ++count;
        }

        extend(template){
            for(let prop in template){
                if(typeof template[prop] == "function") {
                    Object.getPrototypeOf(this)[prop] = template[prop];
                }
                else this[prop] = template[prop];
            }
        }
    }

    return Extensible;
}());


let Extensible = obj;
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();

console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);