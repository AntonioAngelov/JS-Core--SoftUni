/**
 * Created by anton on 26-Sep-16.
 */
function calcDistance([v1, v2, t]) {
    [v1, v2, t] = [v1, v2, t].map(Number);
    let time = t / 3600;
    let distance = Math.max(v1, v2) * time - Math.min(v1, v2) * time;
    console.log(distance * 1000);
}

calcDistance(['0', '60', '3600']);
