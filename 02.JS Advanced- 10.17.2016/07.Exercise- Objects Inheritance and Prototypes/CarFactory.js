/**
 * Created by anton on 30-Oct-16.
 */
function assenbleCar(car) {
    let engines = new Map();
    let carriages = new Map();

    engines.set('smallEngine', { power: 90, volume: 1800 });
    engines.set('normalEngine', { power: 120, volume: 2400 });
    engines.set('monsterEngine', { power: 200, volume: 3500 });

    carriages.set('hatchback', { type: 'hatchback', color: car.color } );
    carriages.set('coupe', { type: 'coupe', color: car.color });

    let assenbledCar = {model: car.model, engine: null, carriage: null, wheels: null};
    if(car.power <= engines.get('smallEngine').power)
        assenbledCar.engine =  engines.get('smallEngine');
    else if(car.power <= engines.get('normalEngine').power)
        assenbledCar.engine =  engines.get('normalEngine');
    else if(car.power <= engines.get('monsterEngine').power)
        assenbledCar.engine =  engines.get('monsterEngine');

    assenbledCar.carriage = carriages.get(car.carriage);
    let wheelsSize = Math.round(car.wheelsize);
    if(wheelsSize % 2 == 0) wheelsSize -= 1;
    assenbledCar.wheels = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];

    return assenbledCar;

}

let a = { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 };

console.log(assenbleCar(a));
