/**
 * Created by anton on 26-Sep-16.
 */
function isPrime([num]){
    num = Number(num);
    if(num <= 1)return false;
    for(let i = num - 1; i >= Math.sqrt(num); --i){
        if(num % i == 0) return false;
    }
    return true;
}

