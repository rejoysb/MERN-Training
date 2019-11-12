function reverse(num) {
	return Number(
		String(num)
			.split('')
			.reverse()
			.join('')
	);
}

// function reverse(num) {
// 	let reversed = '';
// 	let str = String(num);
// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i];
// 		reversed = char + reversed;
// 	}
// 	return Number(reversed);
// }

const result = reverse(123456);

console.log(result);
console.log(typeof result);
