/**
 * Created by anton on 10-Oct-16.
 */
function calculateIncomePerTown(input) {
    let result = new Map();

    for (let i = 0; i < input.length; i++) {
        let [town, product, countAndPrice] = input[i].split(/\s*->\s*/);
        [count, pricePerProduct] = countAndPrice.split(/\s*:\s*/).map(Number);
        if(!result.has(town)){
            result.set(town, new Map());
        }
        let income = count * pricePerProduct;
        let oldIncome = result.get(town).get(product);
        if(oldIncome) income += oldIncome;
        result.get(town).set(product, income);
    }

    let towns = Array.from(result.keys());

    for (let town of towns){
        console.log(`Town - ${town}`);
        let products = Array.from(result.get(town).keys());
        for(let product of products){
            console.log(`$$$${product} : ${result.get(town).get(product)}`)
        }
    }
}


calculateIncomePerTown([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']);