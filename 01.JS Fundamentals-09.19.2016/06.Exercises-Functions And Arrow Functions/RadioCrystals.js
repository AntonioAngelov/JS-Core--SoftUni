/**
 * Created by anton on 30-Sep-16.
 */
function manageStone(input)
{
    input = input.map(Number);
    let times = 0;

    for (let stoneNumber = 1; stoneNumber < input.length; stoneNumber++) {
        console.log(`Processing chunk ${input[stoneNumber]} microns`);

        //Cut
        while(input[stoneNumber] / 4 >= input[0] || parseInt(input[0] - (input[stoneNumber] / 4)) == 1){
            input[stoneNumber] /= 4;
            times += 1;
        }
        input[stoneNumber] = Math.floor(input[stoneNumber]);
        if(times != 0) {
            console.log("Cut x" + times);
            console.log("Transporting and washing");
        }
        times = 0;


        if(input[stoneNumber] + 1 == input[0]) {
            console.log("X-ray x1");
            input[stoneNumber] = input[0];
        }
        if (input[stoneNumber] == input[0]){
            console.log(`Finished crystal ${input[0]} microns`);
            continue;
        }

        //Lap
        while(input[stoneNumber] - (input[stoneNumber] * 0.2) >= input[0]|| parseInt(input[0] - (input[stoneNumber] - (input[stoneNumber] * 0.2))) == 1){
            input[stoneNumber] -= input[stoneNumber] * 0.2;
            times += 1;
        }
        input[stoneNumber] = Math.floor(input[stoneNumber]);
        if(times != 0) {
            console.log("Lap x" + times);
            console.log("Transporting and washing");
        }
        times = 0;
        if(input[stoneNumber] + 1 == input[0]) {
            console.log("X-ray x1");
            input[stoneNumber] = input[0];
        }
        if (input[stoneNumber] == input[0]){
            console.log(`Finished crystal ${input[0]} microns`);
            continue;
        }

        //Grind
        while(input[stoneNumber] - 20 >= input[0] || parseInt(input[0] - (input[stoneNumber] - 20) == 1)){
            input[stoneNumber] -= 20;
            times += 1;
        }
        input[stoneNumber] = Math.floor(input[stoneNumber]);
        if(times != 0) {
            console.log("Grind x" + times);
            console.log("Transporting and washing");
        }
        times = 0;
        if(input[stoneNumber] + 1 == input[0]) {
            console.log("X-ray x1");
            input[stoneNumber] = input[0];
        }
        if (input[stoneNumber] == input[0]){
            console.log(`Finished crystal ${input[0]} microns`);
            continue;
        }

        //Etch

        while(input[stoneNumber] - 2 >= input[0] - 1){
            input[stoneNumber] -= 2;
            times += 1;
        }
        input[stoneNumber] = Math.floor(input[stoneNumber]);
        if(times != 0) {
            console.log("Etch x" + times);
            console.log("Transporting and washing");
        }
        times = 0;
        if(input[stoneNumber] + 1 == input[0]) {
            console.log("X-ray x1");
            input[stoneNumber] = input[0];
        }

        if(input[stoneNumber] == input[0])console.log(`Finished crystal ${input[stoneNumber]} microns`);
    }
}

manageStone([100, 101.9]);