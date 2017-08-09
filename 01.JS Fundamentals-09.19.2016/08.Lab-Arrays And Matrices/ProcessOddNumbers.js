/**
 * Created by anton on 03-Oct-16.
 */
function procesNumbers(input){
    input = input.map(Number);
    let result = [];
    for (let i = 1; i < input.length; i+=2) {
        result.push(input[i] * 2);
    }

    result = result.reverse();
    console.log(result.join(" "));
}

procesNumbers(['10', '15', '20', '25']);