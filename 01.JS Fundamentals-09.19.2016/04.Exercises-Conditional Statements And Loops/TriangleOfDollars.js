/**
 * Created by anton on 27-Sep-16.
 */
function drawTriangle(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col = 1; col <= row; col++) {
            line += '$';
        }
     console.log(line);
    }
}

drawTriangle([3]);