// naming covenstion
//  1. camelcasing for functions, variables, methods -> getPosts
// 2. classes,interface, costructor -> pascalcasing - GetPerson
// 3. constant PORT ,PI ,MY_SECRET_KEY
// 4. _length -> do not modify this directly

class Person {
	constructor(name) {
		this.name = name;
	}
}

class Student extends Person {
	constructor(name, school) {
		super(name);
		this.school = school;
	}
}
const stu1 = new Student();

// typescript -> interfaces -> implements
// interface Person{
//     name:string;
//     getName:Function
// }
