/**
 * Created by anton on 29-Sep-16.
 */
function toUpper([str]) {
    let upper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    console.log(words.join(', '));

    function extractWords(){return upper.split(/\W+/);}
}


toUpper(['Hi, how are you?']);