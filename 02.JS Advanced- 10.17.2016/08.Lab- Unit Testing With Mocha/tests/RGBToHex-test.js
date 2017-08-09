/**
 * Created by anton on 31-Oct-16.
 */
let expect = require("chai").expect;
let rgbToHexColor = require("../RGBToHex").rgbToHexColor;

describe("Test RGB to HEx", function () {
    it("should return #FF9EAA for (255, 158, 170)", function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });

    it("should return #000000 for (0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it("should return #0C0D0E for (12, 13, 14) ", function () {
        expect(rgbToHexColor(12, 13, 14) ).to.be.equal('#0C0D0E');
    });

    it("should return #FFFFFF for (255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it("should return undefined for (-1, 0, 0)", function () {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it("should return undefined for (0, -1, 0)", function () {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it("should return undefined for (0, 0, -1)", function () {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it("should return undefined for (256, 0, 0)", function () {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it("should return undefined for (0, 256, 0)", function () {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it("should return undefined for (0, 0, 256)", function () {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it("should return undefined for (3.14, 0, 0)", function () {
        expect(rgbToHexColor(3.14, 0, 0)).to.be.undefined;
    });

    it("should return undefined for (0, 3.14, 0)", function () {
        expect(rgbToHexColor(0, 3.14, 0)).to.be.undefined;
    });

    it("should return undefined for (0, 0, 3.14)", function () {
        expect(rgbToHexColor(0, 0, 3.14)).to.be.undefined;
    });

    it("should return undefined for ('5', [3], {8:9})", function () {
        expect(rgbToHexColor('5', [3], {8:9})).to.be.undefined;
    });

    it("should return undefined for ()", function () {
        expect(rgbToHexColor()).to.be.undefined;
    });
});