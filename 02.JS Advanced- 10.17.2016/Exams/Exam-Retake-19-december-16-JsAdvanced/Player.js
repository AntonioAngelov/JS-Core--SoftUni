/**
 * Created by anton on 19-Dec-16.
 */
class Player{
    constructor(nickName){
        this.nickname = nickName;
        this.scores = [];
    }

    addScore(score){
        if(score === Number(score) || (typeof score == "string" && !(isNaN(score)))){
            this.scores.push(Number(score));
            this.scores.sort((a, b) => b - a);
        }
        return this;
    }

    get scoreCount(){
        return this.scores.length;
    }

    get highestScore(){
        return this.scores[0];
    }

    get topFiveScore(){
        let top5 = this.scores.slice(0, 5);
        return top5;
    }

    toString(){
        return this.nickname + ': ' + '[' + this.scores + ']';
    }
}

let player = new Player('az');
player.addScore(true);
player.addScore('111');
player.addScore('111');
console.log("" + player)

