/**
 * Created by anton on 15-Oct-16.
 */
function killThemAll(input) {
    let bombs = input.pop().split(' ');
    bombs = bombs.map(x => x.split(',').map(Number));

    let matrix = input.map(row => row.split(' ').map(Number));

    let damageDealt = 0;
    let bunnysKilled = 0;

    for (let i = 0; i < bombs.length; i++) {
        let bombRow = bombs[i][0];
        let bombCol = bombs[i][1];
        let damage = matrix[bombRow][bombCol];

        if(matrix[bombRow][bombCol] == 0)continue;

        damageDealt += matrix[bombRow][bombCol];
        bunnysKilled +=1;

        //explosion area
        let startRow = Math.max(bombRow - 1, 0);
        let endRow = Math.min(bombRow + 1, matrix.length - 1);
        let startCol = Math.max(bombCol - 1, 0);
        let endCol = Math.min(bombCol + 1, matrix[0].length - 1);

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] = Math.max(0, matrix[row][col] - damage);
            }

        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
           if(matrix[row][col] != 0){
               bunnysKilled +=1;
               damageDealt += matrix[row][col];
           }
        }
    }

    console.log(damageDealt);
    console.log(bunnysKilled);
}

killThemAll([
    '5 10 15 20',
    '0,2 0,1'
]);
