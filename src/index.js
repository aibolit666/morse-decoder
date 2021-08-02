const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let subarray = [];
  let array = [];
  let count = 0;

  for (let i = 0; i < Math.ceil(expr.length / 10); i++) {
    subarray[i] = expr.slice(i * 10, i * 10 + 10);
  }
  for (let i = 0; i < subarray.length; i++) {
    if (subarray[i] === "**********") {
      subarray[i] = "*";
    }
    for (let j = 0; j < subarray[i].length; j++) {
      if (count === 5) {
        array.push(",");
        count = 0;
      }
      if (subarray[i][j] === "0" && subarray[i][j + 1] === "0") {
        j++;
        count++;
      } else if (subarray[i][j] === "1" && subarray[i][j + 1] === "0") {
        array.push(".");
        j++;
        count++;
      } else if (subarray[i][j] === "1" && subarray[i][j + 1] === "1") {
        array.push("-");
        j++;
        count++;
      } else if (subarray[i][j] === "*") {
        array.push("*");
        j++;
        count = 5;
      }
    }
  }

  let morseCode = array.join("");
  let result = [];

  morseCode.split("*").map(function (word) {
    word.split(",").map(function (letter) {
      result.push(MORSE_TABLE[letter]);
    });
    result.push(" ");
  });

  return result.slice(0, -1).join("");
}

module.exports = {
  decode,
};
