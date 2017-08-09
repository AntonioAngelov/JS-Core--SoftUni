/**
 * Created by anton on 28-Oct-16.
 */
function calculate(name, age, weight, height){
let personInfo = { age: age, weight: weight, height: height};
let person = {name: name, personalInfo: personInfo, BMI:Math.round(weight/ ((height / 100) * (height / 100))), status: ""};
person.status = getStatus(person.BMI);
    if(person.status == "obese")person["recommendation"] = "admission required";
    return person;

    function getStatus(BMI) {
      if(BMI < 18.5)return "underweight";
        else if(BMI < 25)return "normal";
        else if(BMI < 30) return "overweight";
        else if(BMI >= 30) return "obese";

    }
}

calculate('Peter', 29, 75, 182);