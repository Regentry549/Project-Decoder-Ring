// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("Substitution tests wrtten by Ryan", () => {
  it("should return false if the given alphabet isn't exactly 26 characters", () => {
    const input = "jiggle";
    const alphabet = "tooshort";
    const expected = false;
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });


  it("correctly translates using the alphabet given", () => {
    const input = "yooo yooo";
    const alphabet = "poiuytrewqasdfghjklmnbvcxz";
    const expected = 'ebbb ebbb';
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
  
  it("should return false for duplicate characters in alphabet", () => {
    const input = "yooo yooo";
    const alphabet = "aaaaaaaaaaaaaaaaaaaaaaaaaa";
    const expected = false;
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });

    it("maintains spaces correctly", () => {
    const input = "yooo yooo";
    const alphabet = "poiuytrewqasdfghjklmnbvcxz";
    const expected = 'ebbb ebbb';
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });

    it("maintains spaces correctly", () => {
    const input = "yooo yooo";
    const alphabet = "poiuytrewqasdfghjklmnbvcxz";
    const expected = 'xggg xggg';
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
  
    it("ignores capital letters", () => {
    const input = "HEYA HEYA";
    const alphabet = "poiuytrewqasdfghjklmnbvcxz";
    const expected = 'eyxp eyxp';
    const actual = substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});
