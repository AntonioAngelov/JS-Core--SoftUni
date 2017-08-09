/**
 * Created by anton on 30-Sep-16.
 */
function findShortestSegment([x1, y1, x2, y2, x3, y3]) {
    function calcDistance(coordX1, coordY1, coordX2, coordY2) {
        return Math.sqrt(Math.pow(coordX1 - coordX2, 2) + Math.pow(coordY1 - coordY2, 2));
    }

    let point1To2 = calcDistance(x1, y1, x2, y2);
    let point1To3 = calcDistance(x1, y1, x3, y3);
    let point2To3 = calcDistance(x2, y2, x3, y3);

    let distance123 = point2To3 + point1To2;
    let distance132 = point1To3 + point2To3;
    let distance213 = point1To2 + point1To3;
    let distance231 = point2To3 + point1To3;
    let distance312 = point1To3 + point1To2;
    let distance321 = point2To3 + point1To2;

    if(distance123 == Math.min(distance123, distance132, distance213, distance231, distance312, distance321)) console.log("1->2->3: " + distance123);
    else if(distance132 == Math.min(distance123, distance132, distance213, distance231, distance312, distance321)) console.log("1->3->2: " + distance132);
    else if(distance213 == Math.min(distance123, distance132, distance213, distance231, distance312, distance321)) console.log("2->1->3: " + distance213);
    else if(distance231 == Math.min(distance123, distance132, distance213, distance231, distance312, distance321)) console.log("2->3->1: " + distance231);
    else if(distance312 == Math.min(distance123, distance132, distance213, distance231, distance312, distance321)) console.log("3->1->2: " + distance312);
    else if(distance321 == Math.min(distance123, distance132, distance213, distance231, distance312, distance321)) console.log("3->2->1: " + distance321);

}

findShortestSegment([0, 0, 2, 0, 4, 0]);