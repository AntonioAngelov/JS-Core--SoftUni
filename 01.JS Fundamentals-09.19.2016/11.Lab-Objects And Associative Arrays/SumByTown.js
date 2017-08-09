/**
 * Created by anton on 10-Oct-16.
 */
function calculateSum(input){
    let result = {};
    for(let i = 0; i < input.length; i++){
        if (i % 2 == 0){
            if(result.hasOwnProperty(input[i])) result[input[i]] += Number(input[i + 1]);
            else result[input[i]] = Number(input[i + 1]);
        }
    }
    console.log(JSON.stringify(result));
}

calculateSum(['Sofia', '20','Varna','3','Sofia', '5','Varna','4']);