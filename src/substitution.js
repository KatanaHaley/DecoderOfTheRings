
const checkForDuplicate = function (str) {
    for (var i = 0; i <= str.length; i++) {
      for (var j = i + 1; j <= str.length; j++) {
        if (str[j] == str[i]) {
          return true;
        }
      }
    }
    return false;
  };
  
  const ABCs = "abcdefghijklmnopqrstuvwxyz";
  
  function abcAlphaEqualizer(ABCs, alphabet) {
    ABCs.split("").forEach((char) => {
      if (!alphabet.includes(char));
      return false;
    });
    return true;
  }
  
  function substitution(input = "", alphabet = "", encode = true) {
    if (alphabet.length !== 26 || !alphabet) return false;
    if (checkForDuplicate(alphabet)) return false;
    let result = "";
    let text = input.toLowerCase();
  
    // begin encoding function
    if (encode) {
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!alphabet.includes(char)) result += char;
        for (let j = 0; j < ABCs.length; j++) {
          if (char === ABCs[j]) result += alphabet[j];
        }
      }
    }
    //decode
    else {
      if (abcAlphaEqualizer(ABCs, alphabet) === true) {
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (!alphabet.includes(char)) result += char;
          for (let j = 0; j < ABCs.length; j++) {
            if (char === alphabet[j]) result += ABCs[j];
          }
        }
      }
    }
  
    return result;
  }
  
  substitution("hellerrr", "yipperzipper", false);
  
  
  module.exports = substitution;