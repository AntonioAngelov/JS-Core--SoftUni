/**
 * Created by anton on 30-Sep-16.
 */
function isNutsDriver([speed, area]) {

    speed = Number(speed);
    switch (area){
        case "motorway":
            if(speed > 130 && speed <= 150)console.log("speeding");
            else if(speed > 150 && speed <= 170)console.log("excessive speeding");
            else if(speed > 170)console.log("reckless driving");
            break;
        case "interstate":
            if(speed > 90 && speed <= 110)console.log("speeding");
            else if(speed > 110 && speed <= 130)console.log("excessive speeding");
            else if(speed > 130)console.log("reckless driving");
            break;
        case "city":
            if(speed > 50 && speed <= 70)console.log("speeding");
            else if(speed > 70 && speed <= 90)console.log("excessive speeding");
            else if(speed > 90)console.log("reckless driving");
            break;
        case "residential":
            if(speed > 20 && speed <= 40)console.log("speeding");
            else if(speed > 40 && speed <= 60)console.log("excessive speeding");
            else if(speed > 60)console.log("reckless driving");
            break;
    }

}

