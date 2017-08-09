/**
 * Created by anton on 25-Sep-16.
 */
function determine([word]) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    if(fruits.includes(word)) console.log("fruit");
    else if(vegetables.includes(word)) console.log("vegetable");
    else console.log("unknown")
}

determine(["banana"]);