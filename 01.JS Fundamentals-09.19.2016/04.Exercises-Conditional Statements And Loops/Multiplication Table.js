/**
 * Created by anton on 27-Sep-16.
 */
function getTable([n]){
    console.log(`<table border="1">`);
    let line2 = `<tr><th>x</th>`;
    for (var i = 1; i <= n; i++) {
        line2 += `<th>${i}</th>`;
        
    }
    line2 += `</tr>`;
    console.log(line2);

    for (var row = 1; row <= n; row++) {
        let line = `<tr><th>${row}</th>`;
        for (var col = 1; col <=n; col++) {
            line += `<td>${row * col}</td>`;
        }
        line += `</tr>`;
        console.log(line);
    }

    console.log(`</table>`);
}

getTable([2]);