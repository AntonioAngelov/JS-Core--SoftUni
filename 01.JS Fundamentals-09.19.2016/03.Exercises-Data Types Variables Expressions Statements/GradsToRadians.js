/**
 * Created by anton on 26-Sep-16.
 */
function gradToDegree([grads]) {
    let degrees = grads  * 0.9;
    if(degrees >= 0)console.log(degrees % 360);
    else console.log((degrees % 360) + 360);
}
 gradToDegree([100]);