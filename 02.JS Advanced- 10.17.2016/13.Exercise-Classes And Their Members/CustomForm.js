/**
 * Created by anton on 02-Nov-16.
 */
let result = (function () {
    class Textbox{
        constructor(selector, regEx){
            this.selector = selector;
            this._elements = $(selector);
            this._invalidSymbols = regEx;

            let that = this;
            $(selector).on('input change', function () {
                that.value = $(this).val();
            })
        }
        get value(){
            return $(this.selector).val();
        }
        set value(newValue){
            $(this.selector).val(newValue);
        }
        get elements(){
            return this._elements;
        }

        isValid(){
            if(this._invalidSymbols.test(this.value))return false;
            else return true;
        }
    }

    class Form{
        constructor(...objects){
            for(let obj of objects){
                if(!obj instanceof Textbox)
                    throw new Error("invalid object");
            }

            this._element = $('<div>').addClass("form");
            this._textboxes = objects;

            for(let obj of objects){
                this._element.append($(obj.selector));
            }
        }

        submit(){
            let allTextboxesValid = true;

            for(let textbox of this._textboxes){
                if(textbox.isValid() === true)
                    $(textbox.selector).css("border", "2px solid green" );
                else {
                    $(textbox.selector).css("border", "2px solid red");
                    allTextboxesValid = false;
                }
            }
            return allTextboxesValid;
        }

        attach(selector){
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    };
}())


