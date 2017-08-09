/**
 * Created by anton on 10-Oct-16.
 */
function getTowns(towns){
    let arrOftowns = [];
    for (town of towns.slice(1)){
        let [empty, name, lat, long] = town.split(/\s*\|\s*/);
        let currObj = {
            Town: name,
            Latitude: Number(lat),
            Longitude: Number(long)
        }
        arrOftowns.push(currObj);
    }

    console.log(JSON.stringify(arrOftowns));
}

getTowns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)