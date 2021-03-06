/**
 * Created by anton on 07-Nov-16.
 */
let Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;

        this.tasks.push('scheduled a meeting.');
        this.tasks.push('is preparing a quarterly report.');
    }

    _calculateSalary() {
        return this.salary + this.dividend;
    }
}

module.exports = Manager;