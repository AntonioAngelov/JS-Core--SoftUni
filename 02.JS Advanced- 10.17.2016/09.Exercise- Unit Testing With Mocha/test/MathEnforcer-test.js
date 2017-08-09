/**
 * Created by anton on 31-Oct-16.
 */
let expect = require("chai").expect;
let mathEnforcer = require("../MathEnforcer").mathEnforcer;

describe("test functionalities of an object", function () {
    //add
    it("should return 5 for {addFive(0)}", function () {
       expect(mathEnforcer.addFive(0)).to.be.equal(5);
    });

    it("should return 6.5 for {addFive(1.5)}", function () {
        expect(mathEnforcer.addFive(1.5)).to.be.equal(6.5);
    });

    it("should return -5 for {addFive(-10)}", function () {
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
    });

    it("should return undefined for {addFive('dupe')}", function () {
        expect(mathEnforcer.addFive('dupe')).to.be.undefined;
    });

    //subtract
    it("should return 0 for {subtractTen(10)}", function () {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
    });

    it("should return 0.5 for {subtractTen(10.5)}", function () {
        expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
    });

    it("should return -20 for {subtractTen(-10)}", function () {
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
    });

    it("should return undefined for {subtractTen('dupe')}", function () {
        expect(mathEnforcer.subtractTen('dupe')).to.be.undefined;
    });
    //sum
    it("should return 3 for {sum(1, 2)}", function () {
        expect(mathEnforcer.sum(1,2)).to.be.equal(3);
    });

    it("should return 21.1 for {sum(1.1, 20)}", function () {
        expect(mathEnforcer.sum(1.1,20)).to.be.equal(21.1);
    });

    it("should return 1 for {sum(-1, 2)}", function () {
        expect(mathEnforcer.sum(-1,2)).to.be.equal(1);
    });

    it("should return -21 for {sum(-1, -20)}", function () {
        expect(mathEnforcer.sum(-1,-20)).to.be.equal(-21);
    });

    it("should return undefined for {sum('hola', -20)}", function () {
        expect(mathEnforcer.sum('hola',-20)).to.be.undefined;
    });

    it("should return undefined for {sum(1, 'hola')}", function () {
        expect(mathEnforcer.sum(1,'hola')).to.be.undefined;
    });

    it("should return -18.9 for {sum(1.1, -20)}", function () {
        expect(mathEnforcer.sum(1.1, -20)).to.be.equal(-18.9);
    });

    it("should return around 3 for {sum(1.111, 2.111)}", function () {
        expect(mathEnforcer.sum(1.111, 2.111)).to.be.closeTo(3, 0.4);
    });

});