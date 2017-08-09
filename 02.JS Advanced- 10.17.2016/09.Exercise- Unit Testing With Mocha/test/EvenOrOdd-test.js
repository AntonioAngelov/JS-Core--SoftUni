/**
 * Created by anton on 31-Oct-16.
 */
let expect = require("chai").expect;
let isOddOrEven = require("../EvenOrOdd").isOddOrEven;

describe("test if strings length is odd or even", function () {
   it("should return 'even' for ('aa')",function () {
       expect(isOddOrEven('aa')).to.be.equal('even');
   });

    it("should return 'odd' for ('aaa')",function () {
        expect(isOddOrEven('aaa')).to.be.equal('odd');
    });

    it("should return undefined for (1)", function () {
       expect(isOddOrEven(1)).to.be.undefined;
    });

    it("should return undefined for {a:1}", function () {
        expect(isOddOrEven({a:1})).to.be.undefined;
    });

});