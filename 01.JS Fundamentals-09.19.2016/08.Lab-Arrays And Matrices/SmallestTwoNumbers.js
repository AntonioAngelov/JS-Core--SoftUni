/**
 * Created by anton on 03-Oct-16.
 */
function findSmallest2(input) {
   input = input.map(Number);
   input.sort((a, b) => a-b);
    console.log(input.slice(0, 2).join(" "));

}

findSmallest2(['30', '15', '50', '5']);