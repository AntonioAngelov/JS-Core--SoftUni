/**
 * Created by anton on 28-Oct-16.
 */
function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }

    calc.toString = function() { return sum };
    return calc;
}

console.log(add(6)(7));