/**
 * Created by anton on 29-Sep-16.
 */
function calculate([a, b, op]) {
    [a, b] = [a, b].map(Number);
    let calc = function (a, b, op){ return op(a, b)};
    let add = function (a,b) { console.log(a + b)};
    let substract = function (a, b) { console.log(a - b)};
    let multiply = function (a,b) { console.log(a * b)};
    let divide = function (a, b) { console.log(a / b)};

    switch (op)
    {
        case '+':
            calc(a, b, add);
            break;
        case '-':
            calc(a, b, substract);
            break;
        case '*':
            calc(a, b, multiply);
            break;
        case '/':
            calc(a, b, divide);
            break;
    }

}