// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    console.log(input, shift)
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    
    let array = [];
    let result = "";
    let holdCharCode = 0;
    let lowerCaseInput = input.toLowerCase();

    for(let i = 0; i < input.length; i++) {
   
    if(encode){
      //Pushes symbols and spaces
      if(lowerCaseInput.charCodeAt(i) > 31 && lowerCaseInput.charCodeAt(i) < 48 || lowerCaseInput.charCodeAt(i) > 57 && lowerCaseInput.charCodeAt(i) < 65 || 
         lowerCaseInput.charCodeAt(i) > 90 && lowerCaseInput.charCodeAt(i) < 97 || lowerCaseInput.charCodeAt(i) > 122) {
         array.push(lowerCaseInput.charCodeAt(i));
       //Shifts and pushes new lowercase input to array
      } else if(lowerCaseInput.charCodeAt(i) > 96 && lowerCaseInput.charCodeAt(i) < 123) {
          holdCharCode = lowerCaseInput.charCodeAt(i) + (shift);
          if(holdCharCode >= 123)
            holdCharCode = holdCharCode - 26;
          else if(holdCharCode <= 96)
            holdCharCode = holdCharCode + 26;
        
         array.push(holdCharCode);
      } 
    }
    
    if(!encode){
      //Pushes symbols and spaces
      if(lowerCaseInput.charCodeAt(i) > 31 && lowerCaseInput.charCodeAt(i) < 48 || lowerCaseInput.charCodeAt(i) > 57 && lowerCaseInput.charCodeAt(i) < 65 ||
         lowerCaseInput.charCodeAt(i) > 90 && lowerCaseInput.charCodeAt(i) < 97 || lowerCaseInput.charCodeAt(i) > 122) {
        array.push(lowerCaseInput.charCodeAt(i));
     //Shifts and pushes new lowercase input to array
     }else if(lowerCaseInput.charCodeAt(i) > 96 && lowerCaseInput.charCodeAt(i) < 123) {
          holdCharCode = lowerCaseInput.charCodeAt(i) - (shift);
          if(holdCharCode <= 96)
            holdCharCode = holdCharCode + 26;
          else if(holdCharCode >= 123)
            holdCharCode = holdCharCode - 26;
       
          array.push(holdCharCode);
    } 
    }
  }
   //Converts charcode array to a string
    for(let x = 0; x < array.length; x++) {
      result += String.fromCharCode(array[x]);
    }
   console.log(result);
   return result;
 }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
