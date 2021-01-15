const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar Cipher", () => {
    it("Should be given a string and return each letter shifted forward by 3", () => {
      const expected = "wklqnixo";
      const actual = caesar("Thinkful", 3);
      
      expect(actual).to.eql(expected);
    })

    it("Should return false if the shifted value equals zero", () => {
      const expected = false;  
      const actual = caesar("thinkful", 0); 
      expect(actual).to.eql(expected);
    })

    it("Should return false if the shifted value is less than -25", () => {
        const expected = false;
        const actual = caesar("thinkful", -26); 
        expect(actual).to.eql(expected);
      })

      it("Should return false if the shifted value is greater than 25", () => {
          const expected = false;
          const actual = caesar("thinkful", 26); 
          expect(actual).to.eql(expected);
        })

        it("Converts an input given in upper case to lower case", () => {
          const expected = "wklqnixo";
          const actual = caesar("THINKFUL", 3); 
          expect(actual).to.eql(expected);
        })

        it("Shifts letters near the end of the alphabet and wraps them around to the beginning", () => {
          const expected = "c";
          const actual = caesar("z", 3);
          expect(actual).to.eql(expected);
        })
        it("Should ignore spaces and special characters", () => {
            const expected = "this is a secret message!";
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false); 
            expect(actual).to.eql(expected);

          }) 
    })
    


