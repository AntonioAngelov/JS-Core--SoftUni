/**
 * Created by anton on 31-Oct-16.
 */
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

   module.exports = {sum};