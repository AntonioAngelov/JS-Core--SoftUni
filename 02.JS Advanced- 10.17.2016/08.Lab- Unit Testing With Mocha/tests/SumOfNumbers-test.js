/**
 * Created by anton on 31-Oct-16.
 */
let expect = require("chai").expect;
let sum = require("../SumOfNumbers").sum;


describe("Test sum(arr)", function () {
    it("should return 3 for [1, 2]", function () {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);
      expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 1 for [1]", function () {
        let expectedSum = 1;
        let actualSum = sum([1]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return 3 for [1.5, 2.5, -1]", function () {
        let expectedSum = 3;
        let actualSum = sum([1.5, 2.5, -1]);
        expect(actualSum).to.be.equal(expectedSum);
    });

    it("should return NaN for invalid data", function () {
        expect(sum("aaaassas")).to.be.NaN;
    });
});