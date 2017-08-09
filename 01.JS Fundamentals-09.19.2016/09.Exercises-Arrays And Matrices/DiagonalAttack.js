/**
 * Created by anton on 06-Oct-16.
 */
function atackTheDiag(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let mainSum1 = 0;
    let mainSum2 = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum1 += matrix[row][row];
        mainSum2 += matrix[row][matrix[row].length - row - 1];
    }

    if(mainSum1 != mainSum2){
        matrix.forEach(row => console.log(row.join(" ")));
    }
    else{
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if(row != col && col != matrix[row].length - row - 1)matrix[row][col] = mainSum2;
            }
        }

        matrix.forEach(row => console.log(row.join(" ")));
    }

}