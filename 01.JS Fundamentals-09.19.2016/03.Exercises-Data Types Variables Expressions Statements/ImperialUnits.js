/**
 * Created by anton on 26-Sep-16.
 */
function impUnits([inches]) {
    console.log(Math.floor(inches / 12) + "'" + "-" + inches % 12 + '"');
}

impUnits([55]);