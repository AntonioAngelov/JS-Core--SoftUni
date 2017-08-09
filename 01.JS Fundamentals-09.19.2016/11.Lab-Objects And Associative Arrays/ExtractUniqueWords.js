/**
 * Created by anton on 10-Oct-16.
 */
function extractWords(inputSentences) {
    let wordPattern = /\b[a-zA-Z0-9_]+\b/g;
    let words = new Set();
    for (let sentence of inputSentences) {
        let matches = sentence.match(wordPattern);
        matches.forEach(x=>words.add(x.toLowerCase()));
    }
    console.log([...words.values()].join(", "));
}

extractWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']);
