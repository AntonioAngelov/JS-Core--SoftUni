/**
 * Created by anton on 27-Sep-16.
 */
function listOdd(n) {
    n = Number(n);
    for (let i = 1; i <= n; i++) {
        if(i % 2 != 0) console.log(i);
    }
}

listOdd([5]);