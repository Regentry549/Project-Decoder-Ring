// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("Polybius tests wrtten by Ryan", () => {
  it("should include the letters i and j to 42", () => {
    const input = "jiggle";
    const expected = '424222221351';
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });


  it("should translate to (i/j) when decoding 42", () => {
    const input = "424222221351";
    const expected = '(i/j)(i/j)ggle';
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });


  it("should ignore capital letters", () => {
    const input = "A Message";
    const expected = '11 23513434112251';
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });


  it("should include spaces in the message, before and after encoding or decoding", () => {
    const input = "A Message";
    const expected = '11 23513434112251';
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });


  it("should include spaces in the message, before and after encoding or decoding", () => {
    const input = "11 23513434112251";
    const expected = 'a message';
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
});
