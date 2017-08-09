/**
 * Created by anton on 30-Oct-16.
 */
(function solve(){
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
      let arr = this.slice(n);
        return arr;
    }

    Array.prototype.take = function (n) {
        let arr = this.slice(0, n);
        return arr;
    }

    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
          sum += this[i];
        }

        return sum;
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }

}())