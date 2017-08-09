/**
 * Created by anton on 07-Nov-16.
 */
function mapSort(myMap, sortFunc) {
    if(sortFunc == undefined){
        sortFunc = function (a, b) {
            return a[0].toString().localeCompare(b[0].toString());
        }
    }

    let sortedMap = new Map();
    Array.from(myMap.entries()).sort(sortFunc).forEach(element => sortedMap.set(element[0], element[1]));
    return sortedMap;

}

module.exports = { mapSort };

//let map = new Map();
//map.set(3,"Pesho");
//map.set(1,"Gosho");
//map.set(7,"Aleks");
//
//for(let [k, v] of mapSort(map)){
//    console.log(k + "->" + v);
//}