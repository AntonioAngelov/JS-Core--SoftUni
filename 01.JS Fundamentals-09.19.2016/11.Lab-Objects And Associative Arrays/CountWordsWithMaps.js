/**
 * Created by anton on 10-Oct-16.
 */
function countWordsMap([input]){
    let str = input.toLowerCase();
    let words = str.split(/[^A-Za-z0-9_]+/).filter(x => x != '');
    let map = new Map();
    for (let w of words) {
        if (map.has(w)) map.set(w, map.get(w) + 1);
        else map.set(w, 1);
    }

    let arr = Array.from(map.keys()).sort();

    arr.forEach(word => console.log(`'${word}' -> ${map.get(word)} times`));
}
countWordsMap([`Far too slow, you're far too slow.`]);