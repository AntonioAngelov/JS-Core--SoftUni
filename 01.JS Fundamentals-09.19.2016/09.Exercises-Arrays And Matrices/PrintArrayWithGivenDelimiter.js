/**
 * Created by anton on 04-Oct-16.
 */
function printWithDelimeter(input){
    let delimeter = input.splice(input.length - 1, 1);
    console.log(input.join(delimeter));
}

printWithDelimeter(['One', 'Two', 'Three', '-']);
