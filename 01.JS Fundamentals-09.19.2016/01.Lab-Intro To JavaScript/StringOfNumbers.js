/**
 * Created by anton on 25-Sep-16.
 */
function findStrOfNums([n]) {
    let str = "";
    for(let num = 1; num <= Number(n); num++){
        str += num;
    }

    console.log(str);
}
findStrOfNums([11]);