// function pallindrome(str) {
// 	const reversed = str
// 		.split('')
// 		.reverse()
// 		.join('');
// 	return str == reversed;
// }

function pallindrome(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    reversed = char + reversed;
  }
  return reversed == str;
}

console.log(pallindrome("hello"));
console.log(pallindrome("lol"));
