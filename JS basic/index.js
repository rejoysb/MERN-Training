// naming covenstion
//  1. camelcasing for functions, variables, methods -> getPosts
// 2. classes,interface, costructor -> pascalcasing - GetPerson
// 3. constant PORT ,PI ,MY_SECRET_KEY
// 4. _length -> do not modify this directly

class Array2 {
	Array2(length) {
		this.length = length;
	}

	pop() {}

	push() {}

	logLength() {
		return this.length;
	}
}

const newarr = new Array2(100);

console.log(newarr.logLength());
