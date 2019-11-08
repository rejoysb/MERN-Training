const arr2 = [5, 6, 7, 8];
const arr = [1, 2, 3, 4];

// copying vaues

const arr3 = [...arr, ...arr2];
// console.log(arr3);

const person1 = {
	name: 'Abhishek'
};
const person2 = {
	name2: 'rejoy'
};

const persons = {
	...person1,
	...person2
};

// console.log(persons);

const person = {
	name: 'Abhishek',
	age: 28
};

// destructruing - objects
// const name = person.name
// const age = person.age
// const { name: myname, age: myage } = person;
// console.log(myname, myage);

// destructruing - arrays
const arr5 = ['Abhishek', 'rejoy'];

// const myname =arr5[0]
const [myname, yourname] = arr5;
console.log(myname, yourname);
