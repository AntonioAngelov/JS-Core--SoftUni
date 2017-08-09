/**
 * Created by anton on 04-Nov-16.
 */
function solve(){
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends  Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }

    return {Person, Teacher};
}