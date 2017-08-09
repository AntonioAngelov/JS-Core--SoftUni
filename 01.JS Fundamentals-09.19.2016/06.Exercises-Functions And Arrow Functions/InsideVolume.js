/**
 * Created by anton on 30-Sep-16.
 */
function solved(input) {
    for (let i = 0; i < input.length; i+=3) {
        isInside(input[i], input[i + 1], input[i + 2]);
    }

    function isInside(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if(x >= x1 && x <= x2 && y <= y2 && y >=y1 && z >=z1 && z <=z2) console.log("inside");
        else console.log("outside");
    }
}

solved([8, 20, 22]);