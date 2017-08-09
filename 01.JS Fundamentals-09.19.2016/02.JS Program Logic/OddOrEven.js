/**
 * Created by anton on 25-Sep-16.
 */
function oddOrEven([number]) {
    number = Number(number);
    if(number != Math.round(number)) console.log("invalid")
    else{
        if(number % 2 == 0)console.log("even");
        else console.log("odd");
    }
}