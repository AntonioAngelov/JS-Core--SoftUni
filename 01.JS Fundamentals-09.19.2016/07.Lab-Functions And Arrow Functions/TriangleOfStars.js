/**
 * Created by anton on 29-Sep-16.
 */
function drawTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }

    for (let i = n - 1; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

drawTriangle(5);