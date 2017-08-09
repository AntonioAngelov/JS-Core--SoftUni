/**
 * Created by anton on 07-Nov-16.
 */
let Entity = require("./Entity");

class Dog extends Entity{
    constructor(name){
        super(name);
    }

    saySomething(){
        return `${this.name} barks!`
    }
}

module.exports = Dog;