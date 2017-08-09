/**
 * Created by anton on 04-Oct-16.
 */
function isMagical(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let rowSum = 0;

    matrix[0].forEach(x => rowSum += x);
    let itsTrue = true;

    for (let i = 1; i < matrix.length; i++) {
        let currRowSum = 0;
        matrix[i].forEach(x => currRowSum += x);
        if(currRowSum != rowSum){
            itsTrue = false;
            break;
        }
    }

    for (let col = 0; col < input.length; col++) {
        let colSum = 0;
        for (let row = 0; row < input.length; row++) {
            colSum += matrix[row][col];
        }
        if(rowSum != colSum){
            itsTrue = false;
            break;
        }
    }

    if(itsTrue == true)console.log("true");
    else console.log("false")
}