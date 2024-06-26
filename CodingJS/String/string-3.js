// 102
function countWordsEndingInYorZ(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Split the string into words using regex to include words followed by non-alphabetic characters
  let words = str.split(/[^a-z]+/);

  // Initialize the counter
  let count = 0;

  // Loop through each word to check the condition
  words.forEach((word) => {
    if (word.endsWith("y") || word.endsWith("z")) {
      count++;
    }
  });

  return count;
}

// 103
function withoutString(base, remove) {
  let result = "";
  let removeLower = remove.toLowerCase(); // Convert the remove string to lowercase for case-insensitive comparison
  let i = 0;

  while (i < base.length) {
    // Extract the substring from base of the same length as remove for comparison
    let sub = base.slice(i, i + remove.length).toLowerCase();

    if (sub === removeLower) {
      // If the substring matches the remove string, skip over it
      i += remove.length;
    } else {
      // If it doesn't match, add the current character to the result
      result += base[i];
      i++;
    }
  }

  return result;
}

// 104
function equalIsNot(str) {
  let isCount = 0;
  let notCount = 0;
  let index = 0;

  while (index < str.length) {
    let isSub = str.substring(index, index + 2);
    let notSub = str.substring(index, index + 3);

    console.log(isSub, notSub);
    if (notSub === "not") {
      notCount++;
    }

    if (isSub === "is") {
      isCount++;
    }

    index++;
  }
  return isCount === notCount;
}

// 105
function gHappy(str) {
  let index = 0;
  while (index < str.length) {
    if (str[index] === "g") {
      if (str[index - 1] !== "g" && str[index + 1] !== "g") {
        return false;
      }
    }
    index++;
  }
  return true;
}

// 106
function countTriple(str) {
  let count = 0;
  let index = 0;
  while (index < str.length) {
    let sub = str.substring(index, index + 3);
    if (sub[0] === sub[1] && sub[1] === sub[2]) count++;
    index++;
  }
  return count;
}

// 107
function sumDigits(str) {
  let count = 0;
  let index = 0;
  while (index < str.length) {
    if (Number(str[index])) count += Number(str[index]);
    index++;
  }
  return count;
}

// 108 => this question has issues in solve section
function sameEnds(s) {
  for (let i = Math.floor(s.length / 2); i > 0; i--) {
    if (s.slice(0, i) === s.slice(-i)) {
      return s.slice(0, i);
    }
  }
  return "";
}

// 109
function mirrorEnds(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - i - 1]) result += string[i];
    else {
      return result;
    }
  }
  return result;
}

// 110
function maxBlock(str) {
  if (str.length === 0) return 0;

  let maxBlockLength = 1;
  let currentBlockLength = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentBlockLength++;
    } else {
      if (currentBlockLength > maxBlockLength) {
        maxBlockLength = currentBlockLength;
      }
      currentBlockLength = 1;
    }
  }

  if (currentBlockLength > maxBlockLength) {
    maxBlockLength = currentBlockLength;
  }

  return maxBlockLength;
}

// 111
function sumNumbers(str) {
  let result = 0;
  let currentNumber = "";
  for (let i = 0; i < str.length; i++) {
    if (isDigit(str[i])) {
      currentNumber += str[i];
    } else {
      currentNumber += ".";
    }
  }
  const splited = currentNumber.split(".");

  for (let i = 0; i < splited.length; i++) {
    if (isDigit(splited[i])) {
      result = result + Number(splited[i]);
    }
  }
  return result;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

// 112
function notReplace(str) {
  let result = "";
  let index = 0;

  while (index < str.length) {
    if (
      str.slice(index, index + 2) === "is" &&
      (index === 0 || !isLetter(str[index - 1])) &&
      (index + 2 === str.length || !isLetter(str[index + 2]))
    ) {
      result += "is not";
      index += 2;
    } else {
      result += str[index];
      index++;
    }
  }

  return result;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
