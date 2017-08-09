/**
 * Created by anton on 30-Oct-16.
 */
function result() {

    let myObj = {}
    myObj.extend = function (template) {
        for (let a in template) {
            if( typeof template[a] == 'function'){
                Object.getPrototypeOf(myObj)[a]=template[a]
            } else {
                myObj[a] = template[a]
            }
        }
    }
    return myObj
}
