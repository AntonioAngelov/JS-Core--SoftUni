/**
 * Created by anton on 03-Nov-16.
 */
let expect = require('chai').expect;
let SortedList = require('../SortedList').SortedList;

describe("Test SortedList class", function () {
 let currentList = {};
 beforeEach(function () {
     currentList = new SortedList();
 });
    it("SortedList should be have a constructor", function () {
        expect(typeof SortedList).to.be.equal('function')
    })

    describe("SortedList.prototype should have properties: add, remove, get, size", function () {
        it('SortedList should have add property in its prototype', function () {
            expect(SortedList.prototype.hasOwnProperty("add")).to.be.equal(true);
        });

        it('SortedList should have remove property in its prototype', function () {
            expect(SortedList.prototype.hasOwnProperty("remove")).to.be.equal(true);
        });

        it('SortedList should have get property in its prototype', function () {
            expect(SortedList.prototype.hasOwnProperty("get")).to.be.equal(true);
        });

        it('SortedList should have size property in its prototype', function () {
            expect(SortedList.prototype.hasOwnProperty("size")).to.be.equal(true);
        });

    });

    describe("test the functionality for the properties", function () {
        it(".add() should add elements to the list and keep it sorted", function () {
            currentList.add(1);
            currentList.add(2);
            currentList.add(3);
            expect(currentList.get(0)).to.be.equal(1);
            expect(currentList.get(1)).to.be.equal(2);
            expect(currentList.get(2)).to.be.equal(3);
            currentList.add(-20);
            expect(currentList.get(0)).to.be.equal(-20);
            expect(currentList.get(1)).to.be.equal(1);
            expect(currentList.get(2)).to.be.equal(2);
            expect(currentList.get(3)).to.be.equal(3);
            });
        it("test remove for valid index", function () {
            currentList.add(20);
            currentList.add(15);
            currentList.remove(0);
            expect(currentList.get(0)).to.be.equal(20);
        });

        it("test remove for invalid index and empty list", function () {
            expect(() => currentList.remove(0)).to.throw(Error);
            currentList.add(20);
            currentList.add(15);
            expect(() => currentList.remove(2)).to.throw(Error);
            expect(() => currentList.remove(-1)).to.throw(Error);
        });

        it("test get for invalid index and empty list", function () {
            expect(() => currentList.get(0)).to.throw(Error);
            expect(() => currentList.get(-1)).to.throw(Error);
            currentList.add(1);
            expect(() => currentList.get(2)).to.throw(Error);
        });

        it("test size property", function () {
            expect(currentList.size).to.be.equal(0);
            currentList.add(1);
            currentList.add(1);
            currentList.add(1);
            currentList.add(1);
            expect(currentList.size).to.be.equal(4);

        });

    });
});