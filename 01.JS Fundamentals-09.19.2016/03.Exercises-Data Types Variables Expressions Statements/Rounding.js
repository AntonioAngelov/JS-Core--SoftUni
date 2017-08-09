/**
 * Created by anton on 26-Sep-16.
 */
function roundNum([number, position]) {
    number = Number(number);
    let fixed = Math.round(number * Math.pow(10, position)) / Math.pow(10, position);
    console.log(parseFloat(fixed));
}
roundNum([10.5, 3]);