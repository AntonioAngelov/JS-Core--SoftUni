/**
 * Created by anton on 19-Dec-16.
 */
let expect = require('chai').expect;
let makeList = require('../AddLeftRightClear').makeList;

describe("testing list", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });

    describe("testing addLeft", function() {
        it("should addLeft elements of any type", function () {
            myList.addLeft(1);
            myList.addLeft("az");
            myList.addLeft({"az":"Antonio"});
            expect(myList.toString()).to.be.equal("[object Object], az, 1")
            })

    })

    describe("testing addRight", function() {
        it("should addLeft elements of any type", function () {
            myList.addRight(1);
            myList.addRight("az");
            myList.addRight({"az":"Antonio"});
            expect(myList.toString()).to.be.equal("1, az, [object Object]")
        })

    })

    describe("testing clear", function() {
        it("should addLeft elements of any type", function () {
            myList.addRight(1);
            myList.addRight("az");
            myList.addRight({"az":"Antonio"});
            myList.clear();
            expect(myList.toString()).to.be.equal("")
        })

    })
});