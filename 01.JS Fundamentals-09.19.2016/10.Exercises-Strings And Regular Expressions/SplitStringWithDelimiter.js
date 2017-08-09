/**
 * Created by anton on 07-Oct-16.
 */
function splitString([str, delimeter]){
    str.split(delimeter).forEach(x => console.log(x));
}

splitString(['One-Two-Three-Four-Five ', '-']);