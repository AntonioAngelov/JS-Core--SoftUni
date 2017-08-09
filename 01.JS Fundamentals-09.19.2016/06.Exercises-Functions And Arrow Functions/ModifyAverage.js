/**
 * Created by anton on 30-Sep-16.
 */
function append([number]){
    let countDigits = number.toString().length;
    while(avgIsLessThan5()){
        number = number.toString() + 9;
        ++countDigits;
    }

    console.log(number);

    function avgIsLessThan5() {
        let avg = 0;
        for (let i = 0; i < number.length; i++) {
            avg += Number(number[i]);
        }
        if(avg / countDigits <= 5) return true;
        return false;
    }
}

append(['0']);