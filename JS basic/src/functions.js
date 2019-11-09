const person = {
	name: 'Abhishek'
};

// 1. function generators
function createPerson(name) {
	return {
		name
	};
}
// const person1 = createPerson('abhishek');
// const person2 = createPerson('rejoy');

// console.log(person1);
// console.log(person2);

// 2. Function constructor
function Person(name) {
	return (this.name = name);
}
const person1 = new Person('Abhishek');

// 1. create an empty object {}
// 2. this keyword will point to the object at step 1

console.log(person1);
