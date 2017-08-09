/**
 * Created by anton on 27-Sep-16.
 */
function isInside(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
   if(x <= xMax && x >= xMin && y <= yMax && y >= yMin) console.log("inside");
   else console.log("outside");
}

isInside([8 ,-1, 2,12 ,-3, 3]);