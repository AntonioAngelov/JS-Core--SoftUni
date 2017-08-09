/**
 * Created by anton on 31-Oct-16.
 */
let expect = require("chai").expect;
let lookupChar = require("../CharLookup").lookupChar;

describe("Test lookup for char in string", function () {
   it("should return 'a' for ('az', 0)", function () {
       expect(lookupChar('az', 0)).to.be.equal('a');
   });

    it("should return undefined for ('az', 'az')", function () {
        expect(lookupChar('az', 'az')).to.be.undefined;
    });

    it("should return undefined for (1, 0)", function () {
        expect(lookupChar(1, 0)).to.be.undefined;
    });

    it("should return undefined for ('az', 1.5)", function () {
        expect(lookupChar('az', 1.5)).to.be.undefined;
    });

    it("should return 'a' for ('az', -1)", function () {
        expect(lookupChar('az', -1)).to.be.equal('Incorrect index');
    });

    it("should return 'a' for ('az', 2)", function () {
        expect(lookupChar('az', 2)).to.be.equal('Incorrect index');
    });

    it("should return 'a' for ('az', 3)", function () {
        expect(lookupChar('az', 3)).to.be.equal('Incorrect index');
    });

    it("should return 'v' for ('zdravosloven', 4)", function () {
        expect(lookupChar('zdravosloven', 4)).to.be.equal('v');
    });

});