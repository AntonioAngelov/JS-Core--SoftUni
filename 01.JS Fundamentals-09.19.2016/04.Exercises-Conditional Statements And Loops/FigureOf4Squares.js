/**
 * Created by anton on 28-Sep-16.
 */
function drawFigure([n]) {
if(n != 2) {
    let line1 = '+';
    let line2 = '|';

    for (var a = 0; a < parseInt((2 * n - 4) / 2); a++) {
        line1 += `-`;
        line2 += ' ';
    }
    line1 += '+';
    line2 += '|';
    for (var a = 0; a < parseInt((2 * n - 4) / 2); a++) {
        line1 += `-`;
        line2 += ' ';
    }
    line1 += '+';
    line2 += '|';

    if (n % 2 == 0) n -= 1;

    console.log(line1);
    for (var i = 0; i < parseInt((n - 3) / 2); i++) {
        console.log(line2);

    }
    console.log(line1);

    for (var i = 0; i < parseInt((n - 3) / 2); i++) {
        console.log(line2);

    }
    console.log(line1);
}

else console.log("+++");

}

//drawFigure([2]);
