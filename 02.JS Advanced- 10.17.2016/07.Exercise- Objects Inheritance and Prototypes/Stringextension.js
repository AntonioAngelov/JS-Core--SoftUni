/**
 * Created by anton on 30-Oct-16.
 */
(function solve() {
    String.prototype.ensureStart =  function (str) {
        if(!this.startsWith(str))return str + this;
        else return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str))return this + str;
        else return this.toString();
    };

    String.prototype.isEmpty = function () {
        if(this == '')return true;
        else return false;
    };

    String.prototype.truncate = function (n) {
        if(this.length <= n) return this.toString();
        if(n < 4){
            return '.'.repeat(n);
        }
        if(!this.includes(' ')){
            let modStr = this.slice(0, n - 3) + '...';
            return modStr;
        }

            let words = this.split(' ');
            let modifiedStr = words[0];
            for (let i = 1; i < words.length; i++) {
               if(words[i].length + modifiedStr.length + 4 > n) {
                   return modifiedStr + '...';
               }
               else{
                   modifiedStr += ` ${words[i]}`;
               }

            }
    };

    String.format = function (str, ...params) {
       return str.replace(/\{([\d]+)\}/g, function (m, g) {
           if(params[g] != undefined) return params[g];
           else return m;
       } )
    }
}())

let str = 'mystr' ;

console.log(str.ensureEnd("tr"));