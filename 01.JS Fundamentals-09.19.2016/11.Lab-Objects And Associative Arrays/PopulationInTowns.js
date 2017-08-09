/**
 * Created by anton on 10-Oct-16.
 */
function getPopulationByTown(input) {
    let result = new Map();

    for (let i = 0; i < input.length; i++) {
        let [town, population] = input[i].split(/\s*<->\s*/);
        population = Number(population);
        if(result.has(town))
            result.set(town, result.get(town) + population);
        else
            result.set(town, population);
    }
    let arr = Array.from(result.keys());
    for (let k of arr){
        console.log(`${k} : ${result.get(k)}`);
    }
}

getPopulationByTown(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);