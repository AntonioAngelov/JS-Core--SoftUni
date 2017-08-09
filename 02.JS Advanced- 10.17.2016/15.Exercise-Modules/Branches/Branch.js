/**
 * Created by anton on 07-Nov-16.
 */
class Branch{
    constructor(id, branchName, companyName){
        this.id = id;
        this.branchName = branchName;
        this.companyName = companyName;

        this._employees = [];
    }

    get employees(){
        return this._employees;
    }

    hire(employee){
        this.employees.push(employee);
    }

    toString(){
        let resultStr = `@ ${this.companyName}, ${this.branchName}, ${this.id}\n`;
        resultStr += `Employed:\n`;
        if(this.employees.length == 0){
            resultStr += `None...`;
        }
        else{
            for(let employee of this.employees){
                resultStr += `** ${employee.toString()}\n`;
            }
        }

        return resultStr.trim();
    }
}

module.exports = Branch;