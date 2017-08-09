/**
 * Created by anton on 10-Oct-16.
 */
function countWords(input){
    let result = {};
    let str = input.join('\n');
    let arr = str.split(/[^A-Za-z0-9_]+/).filter(x => x != '');
    for (let i = 0; i < arr.length; i++) {
        if(!result.hasOwnProperty(arr[i]))result[arr[i]] = 1;
        else result[arr[i]] += 1;
    }

    console.log(JSON.stringify(result));
}