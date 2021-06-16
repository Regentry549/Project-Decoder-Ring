// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    //console.log(input);
    if (Array.from(new Set(alphabet)).length !== 26) return false;
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let standardAbc = standardAlphabet.split("");
    let substitute = alphabet.split("");
    //console.log(substitute);
    input = input.toLowerCase();
    let encoder = {};
    let decoder = {};
    let result = "";
    
    standardAbc.forEach((letter, index) => {
      //console.log(letter,index);
      encoder[letter] = substitute[index];
      //console.log(map);
      decoder[substitute[index]] = letter;
      //console.log(decoder);
    })
    //console.log(map);
    if(!encode) encoder = decoder;
    input.split("").forEach(input => {
      console.log(encoder[input]);
      result += input === " " ? " " : encoder[input];
    })
    console.log(result);
    return result;
  }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
