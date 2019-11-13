// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// 1. Map/HashMap, 2. Stack

// {
//   a:1,
//   b:1,
//   c:5,
//   d:1
// }

// result ={}
// result[var]

// for in  -> key -> result[var]

function maxChar(str) {
  const charMap = {};

  for (const char of str.split("")) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  let max = 0;
  let maxCharacter;
  for (const key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxCharacter = key;
    }
  }

  return maxCharacter;
}

console.log(maxChar("abcccccccd"));
