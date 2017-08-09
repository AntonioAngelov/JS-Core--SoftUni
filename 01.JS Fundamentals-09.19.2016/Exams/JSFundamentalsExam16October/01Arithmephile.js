/**
 * Created by anton on 16-Oct-16.
 */
function findBiggestProduct(input) {
    let numbers = input.map(Number);

    let products = [];
    let currProd = 1;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] >= 0 && numbers[i] < 10){
            currProd = 1;
            for (let k = i + 1; k <= i + numbers[i]; k++) {
               currProd *= numbers[k % numbers.length];
            }
            products.push(currProd)
        }
    }
   products.sort((a, b) => a - b);
    console.log(products[products.length - 1]);
}

findBiggestProduct([
   '10',
   '20',
   '2',
   '30',
   '44',
   '123',
   '3',
   '56',
   '20',
   '24'
]);