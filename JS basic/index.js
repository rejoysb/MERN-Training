//extensions
// 1. prettier
// 2. live server
// 3. eslint
// 4. bracket pair colorizer

// Primitive
// 1. Number
// 2. boolean
// 3. string
// 4. null
// 5. undefined

//reference types
// 1. Arrays
// 2. Objects

// functions

// 1. using function keyword
// function greet(name) {
// 	return 'Abhishek'
// }

//  2. Arrow function
// const greet = () => 'Abhishek';

// 3. Objects
const blog = {
	title: 'My first blog',
	description: 'Some desc',
	authors: ['Abhishek', 'rejoy'],
	isPublished: true
};

const blog2 = new Object(blog);
// blog.getBolgTitle.bind(blog2);

console.log(blog2.getBolgTitle.call(blog2));
