/**
 * Created by anton on 30-Oct-16.
 */
let result = (function solve() {
    let list = [];
    function returnInstance() {
        return list;
    }

    function add(element) {
        list.push(element);
        list.sort((a, b) => a - b)
    }

    function remove(index) {
        if(index < list.length - 1 && index >= 0)list.splice(index, 1);
        list.sort((a, b) => a - b)
    }

    function get(index) {
        if(index < list.length - 1 && index >= 0)return list[index];
        list.sort((a, b) => a - b)
    }

    return {returnInstance ,add, remove, get, size: list.length}
})()
result.add(5);
result.add(6);
result.add(1);
console.log(result.get(0));
