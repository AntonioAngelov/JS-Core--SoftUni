/**
 * Created by anton on 28-Oct-16.
 */
function getArgumentInfo() {
    let map = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);
        if (!map.has(type)) {
            map.set(type, 1);
        } else {
            let count = map.get(type) ;
            map.delete(type);
            map.set(type, count + 1);
        }
    }

    let sortedMap = new Map(Array.from(map.entries()).sort((firstEntry, secondEntry) =>{
        let val1 = firstEntry[1];
        let val2 = secondEntry[1];
        return val2 - val1;
    }));

    for(let [key, value] of sortedMap){
        console.log(key + " = " + value);
    }
}

getArgumentInfo({ name: 'bob'}, 3.333, 9.999);