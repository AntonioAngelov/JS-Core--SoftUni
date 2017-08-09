/**
 * Created by anton on 03-Oct-16.
 */
function getSumsBydiag(input){
    let matrix = input.map(r => r.split(' ').map(Number));
    let mainSum = 0;
    let secondarySum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secondarySum += matrix[i][matrix.length - i - 1];
    }

    console.log(mainSum + ' ' + secondarySum);
}