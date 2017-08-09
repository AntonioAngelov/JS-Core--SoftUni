/**
 * Created by anton on 03-Oct-16.
 */
function getBiggest(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let biggest = Number.NEGATIVE_INFINITY;

    matrix.forEach(r => r.forEach(element => biggest = Math.max(biggest, element)));
    console.log(biggest);
}

getBiggest(['20 50 10','8 33 145']);