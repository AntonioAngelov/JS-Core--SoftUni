/**
 * Created by anton on 01-Oct-16.
 */
function drawDNA(n){
    let sequence = "ATCGTTAGGG";
    let lineCounter = 0;
    let sequenceCounter = 0;
    let size = sequence.length;
    while(n > 0) {
        if (lineCounter % 4 == 0)
            console.log("*".repeat(2) + sequence[sequenceCounter % size] + sequence[sequenceCounter % size + 1] + "*".repeat(2));

        else if (lineCounter % 4 == 1 || lineCounter % 4 == 3)
             console.log("*" + sequence[sequenceCounter % size] + "-".repeat(2) + sequence[sequenceCounter % size + 1] + "*");

        else if (lineCounter % 4 == 2)
            console.log(sequence[sequenceCounter % size] + "-".repeat(4) + sequence[sequenceCounter % size + 1]);

        ++lineCounter;
        --n;
        sequenceCounter += 2;
    }
}

drawDNA(10);