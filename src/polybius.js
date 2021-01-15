

const alphabet = [
    { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
    { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42 }, { char: 'j', pos: 42 }, { char: 'k', pos: 52 },
    { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
    { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
    { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }
  ];

  function polybius(input, encode = true) {
    if (!input) return false;
    let output = [];
   // let result = '';
    // encoder
    if (encode) {
      let lower = input.toLowerCase().split(""); 
    // loop through given input
      for (let i = 0; i < lower.length; i++) {
      //console.log(lower)
      // loop through the array and find an alphabet character that matches input
          let match = alphabet.find(alphabet => alphabet.char === lower[i]);
          if (match) output.push(match.pos);
          else if (lower[i] === " ") output.push(lower[i]);
          if (lower === "i" || lower === "j") {
            output += alphabet["i"];
      
       
  
        } else {
            let matches = Object.entries(alphabet).find((letter) => alphabet.char === letter[0]);
            output += matches[1];
        }
    }
  } else {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") 
        counter++;
    }
    if (counter % 2 !== 0) {
        return false;
    };

    // Create methods for decoding
    // "I" and "J" should be shown together if included
    for (let i = 0; i < input.length; i+=2) { 
      let result = "";
      let pair = `${input[i]}${input[i+1]}` 
    // see if given input number pair matches the position pair
      let match = alphabet.find(obj => obj.pos === pair);
              console.log(match);
      
    // find the matching number and push it into the array
       if (match) result.push(match); 
       else if (pair === " ") result.push(pair);
        
       
      }
    }
    // Should return an encoded/decoded message
    return output;
  }
  
  
  
  //  if (pair === "42") {
  //        output += "(i/j)";
  // } 
  //   } else {
  //       let matches = Object.entries(alphabet).find((letter) => pair === letter[1])
  //       if (matches) result += matches[0];
  //   }
  // }

          //console.log(output)
        
      
    


    //if ()
   
//     for (let i = 0; i < input.length; i+=2) { 
//         let pair = `${input[i]}${input[i+1]}` 
// //         // see if given input number pair matches the position pair
//         let match = alphabet.find(obj => obj.pos === pair);
//         console.log(match);

//         // find the matching number and push it into the array
//         if (match) result.push(match); 
//         else if (pair === " ") result.push(pair);

//         //return "hello world" a word from a number input
//       }
//   }
//   return result
// }

//    polybius("3251131343 2543241341", false);
    //polybius("4432423352125413", false);

    // obj => obj.pos === pair


  //if (match) output.push(match.pos);


  // If the input numbers match the pos property, replace the numbers with characters, assign output

        //     if (lower[i] === alphabet[j].char) {
        //     output.push(alphabet[j].char);
        //     //  input.replace(alphabet.pos, alphabet.char);
        //       lower += alphabet.char;
        //       console.log(output);
        //      output.push(lower)
        //   }     
         //} 
         //console.log(output.join(''));
//           return output.join('')
// }

//polybius("4432423352125413", false); //> "th(i/j)



    /*
    let lower = input.toLowerCase().split(""); 
    console.log(alphabet.char);

    for (let i = 0; i < lower.length; i++) {
       for (let j = 0; j < alphabet.length; j++) {

        if (lower[i] === alphabet[j]) {
            alphabet.replace(alphabet.char, alphabet.pos);

        } else {

            if (lower[i] === alphabet[j]) {
              alphabet.replace(alphabet.pos, alphabet.char);
            
              console.log(output);
             output += lower
          }     
        } 
    } 
}
}
          return output.join('')
}

*/

//    input.toLowerCase().split(' ').forEach(word => {})

    /*

 
    const listOfCharacters = listOfWords.split("");
    
console.log(listOfWords);

    const result = listOfCharacters.match(letters);
console.log(listOfCharacters);

    for (let i = 0; i < lower.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
          if (lower[i] === alphabet.char[j]) {
              alphabet.replace(alphabet.char, alphabet.pos);

              result += alphabet[j];
                    output.push(result);
        }
     }
  }
   return output 
}



*/
           // if (!letters.includes(lower[i])) {
            //     output += lower[i];
            //     break;
           // }
           // if (lower[i] === letters[j]) {
            //   if (input === letters[j]){
             //   output += letters[j];


module.exports = polybius; 