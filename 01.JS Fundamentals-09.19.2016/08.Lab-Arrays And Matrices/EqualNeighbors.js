/**
 * Created by anton on 03-Oct-16.
 */
function equalNeighborsCount(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' '));
    let neighbors = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col])
                neighbors++;
            if (matrix[row][col] == matrix[row][col + 1])
                ++neighbors;
        }
    }

    for (let col = 0; col < matrix[matrix.length - 1].length; col++) {
        if (matrix[matrix.length - 1][col] == matrix[matrix.length - 1][col + 1])
            ++neighbors;

    }

    console.log(neighbors);

}


equalNeighborsCount(['test yes yo ho', 'well done yo 6', 'not done yet 5']);