/**
 * Created by anton on 25-Sep-16.
 */
function coneAreaAndVolume([radius, height]) {
[radius, height] = [radius, height].map(Number);
    let s = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let volume = 1/3 *  Math.PI * radius * radius * height;
    let area = Math.PI * radius * s + Math.PI* radius * radius;

    console.log("volume = " + volume);
    console.log("area = " + area);
}

coneAreaAndVolume([3, 5]);