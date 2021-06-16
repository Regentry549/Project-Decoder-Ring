// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("Caesar Tests wrtten by Ryan", () => {
  it("should return false if the shift amount is 0", () => {
    const input = "Hey";
    const shift = 0;
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });


  it("should ignore capital letters", () => {
    const input = "YO YO yo";
    const shift = 3;
    const expected = "br br br";
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });



  it("Should handle letters that go past z", () => {
    const input = "YO YO yo";
    const shift = 3;
    const expected = "br br br";
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });



  it("Should leave spaces or symbols", () => {
    const input = "YO YO yo!!!";
    const shift = -3;
    const expected = "vl vl vl!!!";
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });
});