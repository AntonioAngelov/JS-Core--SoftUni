/**
 * Created by anton on 28-Oct-16.
 */
let robot = (function breakfast() {
    let ingredients = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};

    return function (line) {
        let input = line.split(' ');
        let command = input.shift();
        switch (command){
            case 'restock':
                ingredients[input[0]] =  ingredients[input[0]] + Number(input[1]);
                return 'Success';
            break;
            case 'prepare':
                switch (input[0]){
                    case 'apple':
                        if(input[1] > ingredients.carbohydrate) return 'Error: not enough carbohydrate in stock';
                        else if(input[1] * 2 > ingredients.flavour) return 'Error: not enough flavour in stock';
                        else{
                            ingredients.carbohydrate -= input[1];
                            ingredients.flavour -= input[1] * 2;
                            return 'Success';
                        }
                        break;
                    case 'coke':
                        if(input[1] * 10 > ingredients.carbohydrate) return 'Error: not enough carbohydrate in stock';
                        else if(input[1] * 20 > ingredients.flavour) return 'Error: not enough flavour in stock';
                        else{
                            ingredients.carbohydrate -= input[1] * 10;
                            ingredients.flavour -= input[1] * 20;
                            return 'Success';
                        }
                        break;
                    case 'burger':
                        if(input[1] * 5 > ingredients.carbohydrate) return 'Error: not enough carbohydrate in stock';
                        else if(input[1] * 7 > ingredients.fat) return 'Error: not enough fat in stock';
                        else if(input[1] * 3 > ingredients.flavour) return 'Error: not enough flavour in stock';
                        else{
                            ingredients.carbohydrate -= input[1] * 5;
                            ingredients.fat -= input[1] * 7;
                            ingredients.flavour -= input[1] * 3;
                            return 'Success';
                        }
                        break;
                    case 'omelet':
                        if(input[1] * 5 > ingredients.protein) return 'Error: not enough protein in stock';
                        else if(input[1] * 1 > ingredients.fat) return 'Error: not enough fat in stock';
                        else if(input[1] * 1 > ingredients.flavour) return 'Error: not enough flavour in stock';
                        else{
                            ingredients.protein -= input[1] * 5;
                            ingredients.fat -= input[1] * 1;
                            ingredients.flavour -= input[1] * 1;
                            return 'Success';
                        }
                        break;
                    case 'cheverme':
                        if(input[1] * 10 > ingredients.protein) return 'Error: not enough protein in stock';
                        else if(input[1] * 10 > ingredients.carbohydrate) return 'Error: not enough carbohydrate in stock';
                        else if(input[1] * 10 > ingredients.fat) return 'Error: not enough fat in stock';
                        else if(input[1] * 10 > ingredients.flavour) return 'Error: not enough flavour in stock';
                        else{
                            ingredients.protein -= input[1] * 10;
                            ingredients.carbohydrate -= input[1] * 10;
                            ingredients.fat -= input[1] * 10;
                            ingredients.flavour -= input[1] * 10;
                            return 'Success';
                        }
                        break;
                }
                break;
            case 'report':
                let reported = `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
                return reported;
            break;
        }
    }
}())

console.log(robot('restock flavour 50'));
console.log(robot('prepare coke 4'));
