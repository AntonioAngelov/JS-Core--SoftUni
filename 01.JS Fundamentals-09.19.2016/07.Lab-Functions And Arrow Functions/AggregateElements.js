/**
 * Created by anton on 29-Sep-16.
 */
function agregate(input) {
    let concatenated = '';
    for (let i = 0; i < input.length; i++) {
        concatenated += input[i];
    }
    input = input.map(Number);
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }

    let inverseSum = 0;
    for (let i = 0; i < input.length; i++) {
        inverseSum += 1 / input[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenated);
}

agregate(['1', '2', '3']);