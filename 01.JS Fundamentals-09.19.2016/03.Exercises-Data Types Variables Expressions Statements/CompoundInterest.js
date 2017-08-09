/**
 * Created by anton on 26-Sep-16.
 */
function calcInterest([p, i, n, t]) {
    [p, i, n, t] = [p, i, n, t].map(Number);
     i = i / 100;
     n = 12 / n;
    let h = n * t;
    let m = 1 + (i / n);
    let total = Math.pow(m, h);
    total *= p;
    console.log(Math.round(total * 100) / 100);
}

calcInterest([1500, 4.3, 3, 6]);
