/**
 * Created by anton on 01-Nov-16.
 */
class Rat{
    constructor(name){
        this.name = name;
        this.unitedTo = [];
    }

    unite(otherRat) {
       if(otherRat instanceof Rat)this.unitedTo.push(otherRat);
    }
    getRats(){
        return this.unitedTo;
    }
    toString(){
        let result = this.name + "\n";
        for(let rat of this.unitedTo){
            result += "  " + rat.name + "\n";
        }
        return result;
    }
}

let rat1 = new Rat("pesho");
let rat2 = new Rat("gosho");
rat1.unite(rat2);
console.log(rat1.getRats());