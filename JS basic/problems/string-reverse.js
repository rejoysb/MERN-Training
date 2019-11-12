//  to print a reverse of a input string

// function reverse(str) {
// 	let reversed = '';
// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i];
// 		reversed = char + reversed;
// 	}
// 	return reversed;
// }

function reverse(str) {
	return str
		.split('')
		.reverse()
		.join('');
}
console.log(reverse('hello'));

// Note
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());
// const str = 'hello';
// const res = str.split('');
// console.log(res.join(''));
