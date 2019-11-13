// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Regex  -> str.replace(/\w/g,"")

function anagrams(stringA, stringB) {
  const str1 = cleanString(stringA);
  const str2 = cleanString(stringB);
  return str1 === str2;
}

console.log(anagrams("RAIL! SAFETY", "fairy tales"));

// single responsibility principle
function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

// function anagrams(stringA, stringB) {
//     const str1 = getCharMap(stringA.replace(/[^\w]/g, "").toLowerCase());
//     const str2 = getCharMap(stringB.replace(/[^\w]/g, "").toLowerCase());

//     if (Object.keys(str1).length !== Object.keys(str2).length) return false;

//     for (const key in str1) {
//       if (str1[key] !== str2[key]) return false;
//     }

//     return true;
//   }

//   console.log(anagrams("RAIL! SAFETY@", "fairy tales"));

//   function getCharMap(str) {
//     const charMap = {};

//     for (const char of str.split("")) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
//   }
