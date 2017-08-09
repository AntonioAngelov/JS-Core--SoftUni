/**
 * Created by anton on 31-Oct-16.
 */
let expect = require("chai").expect;
let createCalculator = require("../AddSubtract").createCalculator;

describe("test add/substract", function () {
   let calc;
    beforeEach(function () {
       calc = createCalculator();
    });

    it("should return 0 for {get}", function () {
        expect(calc.get()).to.be.equal(0);
    });

    it("should return 5 for {add(2), add(3), get()}", function () {
        calc.add(2);
        calc.add(3);
        expect(calc.get()).to.be.equal(5);
    });

    it("should return -5 for {subtract(2), subtract(3), get()}", function () {
        calc.subtract(2);
        calc.subtract(3);
        expect(calc.get()).to.be.equal(-5);
    });

    it("should return -2 for {add(2), subtract(3), add(2), subtract(3), get()}", function () {
        calc.add(2);
        calc.subtract(3);
        calc.add(2);
        calc.subtract(3);
        expect(calc.get()).to.be.equal(-2);
    });

    it("should return 4 for {add(2), subtract(-3), add(2), subtract(3), get()}", function () {
        calc.add(2);
        calc.subtract(-3);
        calc.add(2);
        calc.subtract(3);
        expect(calc.get()).to.be.equal(4);
    });

    it("should return NaN for {add('Hello')}", function () {
        calc.add('Hello');
        expect(calc.get()).to.be.NaN;
    });

    it("should return NaN for {subtract('Hello')}", function () {
        calc.subtract('Hello');
        expect(calc.get()).to.be.NaN;
    });

    it("should return 2.4 for {add(3.5), subtract(1.1), get()}", function () {
        calc.add(3.5);
        calc.subtract(1.1);
        expect(calc.get()).to.be.equal(2.4);
    });

    it("should return -6 for {add(2), subtract(3), add(-2), subtract(3), get()}", function () {
        calc.add(2);
        calc.subtract(3);
        calc.add(-2);
        calc.subtract(3);
        expect(calc.get()).to.be.equal(-6);
    });

    it("should return NaN for {subtract('Hello')}", function () {
        calc.subtract('Hello');
        let val = calc.get();
        expect(val).to.be.NaN;
    });

    it("should return NaN for {add('Hello')}", function () {
        calc.add('Hello');
        let val = calc.get();
        expect(val).to.be.NaN;
    });

    it("should return 0 for {add(-2), subtract(-3), add(2), subtract(3), get()}", function () {
        calc.add(-2);
        calc.subtract(-3);
        calc.add(2);
        calc.subtract(3);
        expect(calc.get()).to.be.equal(0);
    });

});