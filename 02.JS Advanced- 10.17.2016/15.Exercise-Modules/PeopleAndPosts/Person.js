/**
 * Created by anton on 07-Nov-16.
 */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    addToSelector(selector) {
        let container = $("<div>");
        container.addClass('person ' + this.name);
        container.append($('<p>').addClass('name').text(this.name));
        container.append($('<p>').addClass("age").text(this.age));
        container.append($('<div>').addClass('posts ' + this.name));

        $(selector).append(container);
    }

}

module.exports = Person;