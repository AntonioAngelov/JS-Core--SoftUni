/**
 * Created by anton on 03-Oct-16.
 */
function splitNumbers(input) {
    input = input.map(Number);
    let negative = [];
    let positive = [];
    for (let i = input.length - 1; i >= 0; i--) {
        if(input[i] < 0) negative.push(input[i]);
    }

    for (let i = 0; i <=  input.length; i++) {
        if(input[i] >= 0) positive.push(input[i]);
    }

    printElements(negative);
    printElements(positive);


    function printElements(arr){
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

splitNumbers(['3', '-2', '0', '-1']);