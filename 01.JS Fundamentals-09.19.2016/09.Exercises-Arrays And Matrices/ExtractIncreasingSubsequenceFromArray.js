/**
 * Created by anton on 04-Oct-16.
 */
function extract(input) {
    input = input.map(Number);
    let result = [];
    result.push(input[0]);
    let current = input[0];
    for (let i = 1; i < input.length; i++) {
        if(input[i] >= current){
            current = input[i];
            result.push(input[i]);
        }
    }
    console.log(result.join('\n'));
}

extract(['1', '2', '1', '3', '1', '1', '1', '1', '1', '1', '1']);