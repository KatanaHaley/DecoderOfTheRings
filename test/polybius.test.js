
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe(('Polybius Square'), () => {
    it(('Should return an encoded message from a number input'), () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.eql(expected);
    });



    it(('Should return false if the input is missing'), () => {
        const actual = polybius("", false);
        expect(actual).to.be.false;
    });

    it(('Should return false if the string of coordinates is not an even number, ignoring spaces'), () => {
        const actual = polybius("3251131343 25432413419", false);
        expect(actual).to.be.false;
    });

    it(('Should maintain spaces included in the input'), () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    });

    it(('Should not output capital letters when encoding), () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello World");
        expect(actual).to.eql(expected);
    });

    it(('The letters "I" and "J" should be shown together if included'), () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.eql(expected);
    });
});
