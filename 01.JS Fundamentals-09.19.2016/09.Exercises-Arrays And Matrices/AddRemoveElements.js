/**
 * Created by anton on 04-Oct-16.
 */
function addOrRemove(input) {
    let result = [];
    let number = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "add") result.push(number);
        else result.pop();
        ++number;
    }

    if (result.length == 0)console.log("Empty");
    else result.forEach(x => console.log(x));
    
}

addOrRemove(['add', 'add']);