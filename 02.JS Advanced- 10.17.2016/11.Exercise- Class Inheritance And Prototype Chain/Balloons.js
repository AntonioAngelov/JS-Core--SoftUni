/**
 * Created by anton on 04-Nov-16.
 */
function solve() {
    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this.ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get ribbon(){
            return this._ribbon;
        }

        set ribbon(ribbon){
            this._ribbon = ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text(){
            return this._text;
        }

        set text(text){
            this._text = text;
        }

    }

    return {Balloon: Balloon,PartyBalloon: PartyBalloon,BirthdayBalloon: BirthdayBalloon};
}

let classes = solve();
let Balloon = classes.Balloon;
let PartyBalloon = classes.PartyBalloon;
let BirthdayBalloon = classes.BirthdayBalloon;

let b1 = new Balloon("red", 2);
console.log(b1.color + " " + b1.gasWeight);

let pb1 = new PartyBalloon("green", 3, "yellow", 4);
console.log(pb1.ribbon);

let bb1 = new BirthdayBalloon("orange", 5, "yellow", 4, "happy bday mofo");
console.log(bb1.text);