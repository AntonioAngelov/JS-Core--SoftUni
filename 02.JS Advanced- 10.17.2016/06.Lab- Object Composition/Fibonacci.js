/**
 * Created by anton on 27-Oct-16.
 */
function fibbonacci(n) {
    let fib = (() => {
        let f0= 0;
        let f1 = 1;
        return () => {
            let oldF0 = f0;
            let oldF1 = f1;
            f0 = oldF1;
            f1 = oldF0 + oldF1;
            return oldF1;
        };
    })();
    let fibNums = [];
    for (let i = 1; i <= n; i++) {
       fibNums.push(fib());
    }

    return fibNums;
}



console.log(fibbonacci(4));