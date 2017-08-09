/**
 * Created by anton on 07-Nov-16.
 */
let Turtle = require('./Turtle');

class WaterTurtle extends Turtle{
    constructor(name, age, gender, waterPool){
        super(name, age, gender);
        this.waterPool = waterPool;
    }

    get currentWaterPool(){
        return this.waterPool;
    }

    travel(waterPool){
       this.waterPool = waterPool;
        this._age += 5;
    }

    toString(){
        return super.toString() + `\nCurrently inhabiting ${this.waterPool}`;
    }
}

module.exports = WaterTurtle;