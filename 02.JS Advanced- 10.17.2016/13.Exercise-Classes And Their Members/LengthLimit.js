/**
 * Created by anton on 02-Nov-16.
 */
class Stringer{
    constructor(initialString, initialLength){
        this.innerString = initialString;
        this.innerLength = initialLength;
        this.initialString = initialString;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        if(this.innerLength - length < 3)this.innerLength = 0;
        else this.innerLength -= length;
    }

    toString(){
        if(this.innerLength == 0) return "...";
        else if(this.initialString.length > this.innerLength)
            return this.initialString.slice(0, this.innerLength) + '...';
        else return this.initialString;
    }
}

let str1 = new Stringer('azsumtup', 2);
console.log(str1.toString());
str1.increase(2);
console.log(str1.toString());