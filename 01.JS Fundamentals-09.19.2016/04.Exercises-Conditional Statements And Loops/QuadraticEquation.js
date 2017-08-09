/**
 * Created by anton on 27-Sep-16.
 */
function calculateEquation([a, b, c]) {
    [a, b, c] =  [a, b, c].map(Number);
    let discriminant = b * b - (4 * a * c);

    if(discriminant > 0) {
        let x1 = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-1 * b - Math.sqrt(discriminant)) / (2 * a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    }
    else if(discriminant == 0) console.log( (-1 * b) / (2 * a));
    else console.log("No");
}

calculateEquation([1, -12, 36]);