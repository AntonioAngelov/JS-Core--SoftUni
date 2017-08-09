/**
 * Created by anton on 10-Oct-16.
 */
function getLowestPRice(input) {
    let products = new Map();

    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(/\s*\|\s*/);
        price = Number(price);
        if(!products.has(product)){
            products.set(product, new Map());
            products.get(product).set(price, town);
        }
        else{
            let currentPrice = Array.from(products.get(product).keys());
            if(price < currentPrice[0]){
               products.delete(product);
                products.set(product, new Map());
                products.get(product).set(price, town)
            }
        }
    }

    let prod = Array.from(products.keys());
    for (let product of prod){
        let prices = Array.from(products.get(product).keys())
        for(let price of prices){
            console.log(`${product} -> ${price} (${products.get(product).get(price)})`);
        }
    }
}

getLowestPRice([
    'Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000);'])
