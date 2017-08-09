/**
 * Created by anton on 04-Oct-16.
 */
function sort(arr) {
          arr.sort((x, y) => x.length > y.length );



    console.log(arr.join('\n'))
}

sort(['test', 'Deny','omen', 'Default']);