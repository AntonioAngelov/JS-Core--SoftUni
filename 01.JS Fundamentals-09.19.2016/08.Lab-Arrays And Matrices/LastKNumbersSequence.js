/**
 * Created by anton on 03-Oct-16.
 */
function getSequence([n, k]) {
let result = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;
        let sum = getSum(start, end);
        result[i] = sum;
    }



    function getSum(start, end) {
        let sum = 0;
        for (let i = start; i <= end; i++) {

            sum += result[i];
        }
        return sum;
    }
     console.log(result.join(" "));
}

getSequence(['6', '3']);