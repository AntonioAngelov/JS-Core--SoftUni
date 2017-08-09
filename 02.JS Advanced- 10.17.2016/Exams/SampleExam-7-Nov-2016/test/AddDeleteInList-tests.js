/**
 * Created by anton on 17-Dec-16.
 */
let list = require('../AddDeleteInList').list;
let expect = require('chai').expect;

describe("test", function () {
    it("should add elements of different type", function () {
        list.add(1);
        list.add({"az":"Antonio"});
        list.add("az");
        expect(list.toString()).to.be.equal("1, [object Object], az")
    });

    describe("test delete(index)", function () {
        it("should return undefined for negative index", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            expect(list.delete(-1)).to.be.undefined;
        })
        it("should not delete anything undefined for negative index", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            list.delete(-1)
            expect(list.toString()).to.be.equal("1, [object Object], az");
        })
        it("should return undefined for index >= than the length of the list", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            expect(list.delete(3)).to.be.undefined;
        })
        it("should not delete anything for index >= than the length of the list", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            list.delete(3)
            expect(list.toString()).to.be.equal("1, [object Object], az");
        })
        it("should delete item at a valid index", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            list.delete(0)
            expect(list.toString()).to.be.equal("[object Object], az");
        })
        it("should return the deleted element", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            expect(list.delete(0)).to.be.equal(1);
        })
        it("should return undefined for argument that is not a number", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            expect(list.delete("hello")).to.be.undefined;
        })
        it("should not delete anything for argument that is not a number", function () {
            list.delete(0);
            list.delete(0);
            list.delete(0);
            list.add(1);
            list.add({"az":"Antonio"});
            list.add("az");
            list.delete("hello")
            expect(list.toString()).to.be.equal("1, [object Object], az");
        })
    })

    it("should return empty string for empty list", function () {
        list.delete(0);
        list.delete(0);
        list.delete(0);
        expect(list.toString()).to.be.equal("");
    })
})