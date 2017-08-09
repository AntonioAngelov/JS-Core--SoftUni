/**
 * Created by anton on 03-Oct-16.
 */
function sumFirstAndLast(input) {
    input = input.map(Number);
    console.log(input[0] + input[input.length - 1]);
}

sumFirstAndLast(['20', '30', '40']);