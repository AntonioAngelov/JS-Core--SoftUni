/**
 * Created by anton on 30-Oct-16.
 */
function modifyWorker(worker) {
    if(worker.handsShaking == false) return worker;
    else{
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
        return worker;
    }
}

let a = { weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true };

    console.log(modifyWorker(a));
