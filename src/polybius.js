
 function polybius(input, encode = true) {
  const alphabet = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
      };
  
  if (!input) return false;
  const lowerCase = input.toLowerCase()
  let result = ""   
     if (encode) {
      for (let i = 0; i < lowerCase.length; i++) {
          let char = lowerCase[i];
          if (char === "i" || char === "j") {
              result += alphabet["i"];
          } else if (char === " ") {
              result += " ";
          } else {
              let same = Object.entries(alphabet).find((letter) => char === letter[0]);
              result += same[1];
          };
      };
  } else {

      let counter = 0;
      for (let i = 0; i < input.length; i++) {
          if (input[i] !== " ") counter++;
      };
      if (counter % 2 !== 0) {
          return false;
      };

      for (let i = 0; i < input.length; i+=2) {
          let encodes = `${input[i]}${input[i+1]}`;
          if (encodes.includes(" ")) {
              result += " ";
              i-=1;
          } else if (encodes === "42") {
              result += "(i/j)";
          } else {
              let same = Object.entries(alphabet).find((letter) => encodes === letter[1]);
              if (same) result += same[0];
          };
      };
  };
  return result;
};

module.exports = polybius;
