/**
 * Created by anton on 04-Oct-16.
 */
function rotateArr(input){
    let rotatedArr = [];
    let n = Number(input.pop());
    for (let i = 0; i < input.length; i++) {
       rotatedArr[(i + n) % input.length] = input[i];
    }

    console.log(rotatedArr.join(' '));
}

rotateArr(['1', '2', '1']);