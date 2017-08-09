/**
 * Created by anton on 29-Sep-16.
 */
function isPalindrome([input]) {
    for (let i = 0; i < input.length / 2; i++) {
        if(input[i] != input[input.length - i - 1]) return false;
    }
    return true;
}

isPalindrome("ABA");