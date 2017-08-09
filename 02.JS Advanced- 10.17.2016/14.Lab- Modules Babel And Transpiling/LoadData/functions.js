/**
 * Created by anton on 07-Nov-16.
 */
let data = require('./data');
function sort(property) {
    return data.sort((a, b) => a[property].localeCompare(b[property]));
}

function filter(property, value) {
    return data.filter(element => element[property] === value);
}

module.exports = { sort, filter};