/**
 * Created by anton on 02-Nov-16.
 */
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
