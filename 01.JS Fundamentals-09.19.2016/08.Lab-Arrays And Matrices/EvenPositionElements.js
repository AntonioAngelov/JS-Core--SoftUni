/**
 * Created by anton on 03-Oct-16.
 */
function getNumbersInEvenPOs(input){
    let finished = '';
    for (let i = 0; i < input.length; i+=2) {
       finished += input[i] + ' ';
    }

    console.log(finished);
}

getNumbersInEvenPOs(['20', '30', '40']);