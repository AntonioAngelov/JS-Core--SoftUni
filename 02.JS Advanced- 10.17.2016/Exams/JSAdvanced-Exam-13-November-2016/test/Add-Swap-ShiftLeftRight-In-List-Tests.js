/**
 * Created by anton on 16-Dec-16.
 */
let createList = require("../Add-Swap-ShiftLeftRight-In-List").createList;
let expect = require('chai').expect;

describe('all functionalities are present', function () {
    let list;
    beforeEach(function () {
       list = createList();
    })

    it("test ad()", function () {
            list.add(1);
            list.add({az:1});
            list.add("Az")
            expect(list.toString()).to.equal('1, [object Object], Az');
        });
    it("test shiftLeft()", function () {
        list.add(1);
        list.add("az");
        list.add(3);
        list.add(4);
        list.shiftLeft();
        expect(list.toString()).to.equal('az, 3, 4, 1')

    })

    it("test shiftRight()", function () {
        list.add(1);
        list.add("az");
        list.add(3);
        list.add(4);
        list.shiftRight();
        expect(list.toString()).to.equal('4, 1, az, 3')
    })

    it("test toString() with no elements in list", function () {
        expect(list.toString()).to.equal('')
    })

    describe("testing swap()", function () {
        it("should return false for negative first index", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(-1, 0)).to.equal(false);
        });

        it("should not change the list for negative first index", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(-1, 0);
            expect(list.toString()).to.equal("1, az, 3, 4");
        });

        it("should return false for negative second index", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(0, -1)).to.equal(false);
        });

        it("should not change the list for negative second index", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(0, -1);
            expect(list.toString()).to.equal("1, az, 3, 4");
        });

        it("should return false for first index > the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(5, 1)).to.equal(false);
        })

        it("should not change the list for non integer first index", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap("az", 1)
            expect(list.toString()).to.equal("1, az, 3, 4");
        })

        it("should return false for non integer first index", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap("az", 1)).to.equal(false);
        })

        it("should not change the list for first index > the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(5, 1)
            expect(list.toString()).to.equal("1, az, 3, 4");
        })

        it("should return false for first index = the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(4, 1)).to.equal(false);
        })

        it("should not change the list for first index = the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(4, 1)
            expect(list.toString()).to.equal("1, az, 3, 4");
        })

        it("should return false for second index > the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(1, 5)).to.equal(false);
        })

        it("should not change the list for second index > the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(1, 5)
            expect(list.toString()).to.equal("1, az, 3, 4");
        })

        it("should return false for second index = the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(1, 4)).to.equal(false);
        })

        it("should not change the list for second index = the length of the list", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(1, 4)
            expect(list.toString()).to.equal("1, az, 3, 4");
        })

        it("should not change the list for equal first and second indexes", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(1, 1)
            expect(list.toString()).to.equal("1, az, 3, 4");
        })

        it("should return false for equal first and second indexes", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(1, 1)).to.equal(false);
        })

        it("should return true for 0 first index and valid second", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(0, 1)).to.equal(true);
        })

        it("should swap elements for 0 first index and valid second", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(0, 1)
            expect(list.toString()).to.equal("az, 1, 3, 4");
        })

        it("should return true for 0 second index and valid first", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            expect(list.swap(1, 0)).to.equal(true);
        })

        it("should swap elements for 0 second index and valid first", function () {
            list.add(1);
            list.add("az");
            list.add(3);
            list.add(4);
            list.swap(1, 0);
            expect(list.toString()).to.equal("az, 1, 3, 4");
        })
    })

})