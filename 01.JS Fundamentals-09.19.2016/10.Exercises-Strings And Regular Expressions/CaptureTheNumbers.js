/**
 * Created by anton on 07-Oct-16.
 */
function capture(input) {
    let numbers = [];
    let regex = /\d+/g;
    let text = "";

    for (let i = 0; i < input.length; i++) {
        text += input[i];
    }

    let match = regex.exec(text);

    while(match){
        numbers.push(match[0]);
        match = regex.exec(text);
    }

    console.log(numbers.join(' '));
}

capture(['The300', 'I think it’s the 3rd movie', 'Lets watch it at 22:45']);