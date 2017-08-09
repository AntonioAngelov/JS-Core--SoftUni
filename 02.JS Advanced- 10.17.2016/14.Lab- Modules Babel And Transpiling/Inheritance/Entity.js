/**
 * Created by anton on 07-Nov-16.
 */
class Entity{
    constructor(name){
        if(new.target === Entity){
            throw new Error
        }

        this.name = name;

    }
}

module.exports = Entity;