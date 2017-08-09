/**
 * Created by anton on 03-Oct-16.
 */
function getNumbers(input) {
    let n = input.shift();
    let first = input.slice(0, n);
    let last = input.slice(input.length - n, input.length);

    console.log(first.join(" "));
    console.log(last.join(" "));
}

getNumbers(['3','6', '7', '8', '9']);