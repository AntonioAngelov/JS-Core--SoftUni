/**
 * Created by anton on 01-Nov-16.
 */
class Person{
    constructor(newFirstName, newLastName, newAge, newEmail){
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.age = newAge;
        this.email = newEmail;
    }

    toString(){
        let str = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        return str;
    }
}

let maria = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(maria.toString());