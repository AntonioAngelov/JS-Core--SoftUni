/**
 * Created by anton on 16-Oct-16.
 */
function decode(input) {
    let size = Number(input.shift());
    let decodingTemplate = input.splice(0, size).map(row => row.split(' ').map(Number));
    let message = input.map(row => row.split(' ').map(Number));

    let letters = [' '];
    for (let i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }

    for (let row = 0; row < message.length; row++) {
        for (let col = 0; col < message[row].length; col++) {
            let index = decodingTemplate[row % size][col % decodingTemplate[0].length] + message[row][col];
            message[row][col] = letters[index % letters.length];
        }
    }

    let resultMessage = "";
    message.forEach(row => row.forEach(letter => resultMessage += letter));

    console.log(resultMessage);
}

decode([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);