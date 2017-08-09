/**
 * Created by anton on 07-Oct-16.
 */
function capitalizeStr([str]){
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }

    console.log(arr.join(' '));
}

capitalizeStr('Capitalize these words');

