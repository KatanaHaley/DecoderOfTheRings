
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j','k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function caesar(input, shift, encode = true) {
    if (!input || !shift) return false;
    if (shift > 25 || shift < -25 || shift === 0) return false;
    
    let output = "";
    let lower = input.toLowerCase();
    
    for (let i = 0; i < lower.length; i++) {
        for (let j = 0; j < letters.length; j++) {
          if (!letters.includes(lower[i])) {
              output += lower[i];
              break;
          }

            let shifter = j + shift;
            if (!encode) shifter = j - shift;
            if (lower[i] === letters[j]) {
                if (shifter > 25) {
                    shifter = shifter - 26
                    output += letters[shifter];   
      
                } else if (shifter < 0) {
                    shifter = shifter + 26  
                    output += letters[shifter];   
  
                    } else {
                        output += letters[shifter];   
                }
            }
        } 
    }
    return output
}


console.log("thinkful", 26)

caesar("thinkful", 25)
//caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'

module.exports = caesar;
