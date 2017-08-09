/**
 * Created by anton on 28-Oct-16.
 */
function sortarray(array, criteria) {
    if(criteria == "asc"){
        return array.sort((a, b) => a - b);
    }
    return array.sort((a, b) => b - a);
}