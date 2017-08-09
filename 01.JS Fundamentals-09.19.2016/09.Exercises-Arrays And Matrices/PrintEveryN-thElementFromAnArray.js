/**
 * Created by anton on 04-Oct-16.
 */
function getNthElements(input){
    let n = input.pop();
    let result = input.filter((a, i) => i % n == 0);
    console.log(result.join('\n'));
}

getNthElements(['1', '2', '3', '4']);