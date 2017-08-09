/**
 * Created by anton on 25-Sep-16.
 */
function findArea([w, h, W, H]) {
let [s1, s2, s3] = [w * h, W * H, Math.min(w,W) * Math.min(H, h)]
    let area = s1 + s2 - s3;
    console.log(area);
}
findArea(['2', '4', '5', '3']);