/**
 * Created by anton on 30-Sep-16.
 */
function cookThisNum(input){
    let number = Number(input[0]);
    let result = function(op, num) { return op(num)};
    let chop = function(num) { return };
    let dice = function(num) { return };
    let spice = function(num) { return  num + 1};
    let bake = function(num) { return num * 3};
    let fillet = function(num) {return  num - (0.2 * num )};

    for (let i = 1; i < input.length; i++) {
       if(input[i] == "chop")number = number / 2;
        else  if (input[i] == "dice") number = Math.sqrt(number);
        else  if (input[i] == "spice")number = number + 1;
        else  if (input[i] == "bake")number = number * 3;
        else  if (input[i] == "fillet")number = number - (0.2 * number );

        console.log(number);
    }

}
cookThisNum([32, `chop`, `chop`, `chop`, `chop`, `chop`]);
