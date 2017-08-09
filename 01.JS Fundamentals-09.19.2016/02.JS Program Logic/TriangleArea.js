/**
 * Created by anton on 25-Sep-16.
 */
function triangleArea([a , b, c]) {
    let p = (Number(a) + Number(b) + Number(c)) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(area);
}

triangleArea([2, 3.5, 4]);