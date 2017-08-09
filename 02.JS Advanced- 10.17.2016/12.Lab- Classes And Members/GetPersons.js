/**
 * Created by anton on 01-Nov-16.
 */
function getArrOfPersons() {
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

    let person1 = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    let person2 = new Person('SoftUni');
    let person3 = new Person('Stephan', 'Nikolov', 25);
    let person4 = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

    return [person1, person2, person3, person4];
}

console.log(getArrOfPersons());