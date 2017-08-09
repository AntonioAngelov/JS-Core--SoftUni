/**
 * Created by anton on 26-Sep-16.
 */
function binLog(input){
    input = input.map(Number);
    for(let i = 0; i < input.length; i++){
        console.log(Math.log2(input[i]));
    }
}
binLog(['4', '16', '36']);