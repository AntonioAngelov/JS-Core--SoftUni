/**
 * Created by anton on 31-Oct-16.
 */
let expect = require("chai").expect;
let isSymmetric = require("../CheckForSymmetry").isSymmetric;

describe("Check for symetry an array", function () {
    it("should return true for [1, 2, 2, 1]", function () {
        expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
    });

    it("should return true for [1, 2, 1]", function () {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });

    it("should return false for [1, 2, 2, -1]", function () {
        expect(isSymmetric([1, 2, 2, -1])).to.be.equal(false);
    });

    it("should return false for [1, 2, -1]", function () {
        expect(isSymmetric([1, 2, -1])).to.be.equal(false);
    });

    it("should return false for [1, 2]", function () {
        expect(isSymmetric([1, 2])).to.be.equal(false);
    });

    it("should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });

    it("should return false for 1, 2, 3", function () {
        expect(isSymmetric(1, 2, 2, 1)).to.be.equal(false);
    });

    it("should return true for [1, 'yes', {a:1}, new Date(), {a:1}, 'yes', 1]", function () {
        expect(isSymmetric([1, 'yes', {a:1},new Date(),{a:1}, 'yes', 1])).to.be.equal(true);
    });
});