/**
 * Created by anton on 07-Nov-16.
 */
class Person {
    constructor(name){
        this.name = name;
    }

    toString(){
        return `I'm ${this.name}`
    }
}

module.exports = {Person}