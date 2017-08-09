/**
 * Created by anton on 05-Nov-16.
 */
function solve() {
    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new Error("Abstract class Melon could not be instantiated!")
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this.element = '';
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            let result = `Element: ${this.element}\n`;
            result += `Sort: ${this.melonSort}\n`;
            result += `Element Index: ${this.elementIndex}`;
            return result;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Air';
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.elementsArr = ['Water', 'Fire', 'Earth', 'Air'];
            this.morph();
        }

        morph(){
            let currentEl = this.elementsArr.shift();
            this.element = currentEl;
            this.elementsArr.push(currentEl);
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}