// type AddFn = (a: number, b: number) => number;
interface NumbersFn {
	(a: number, b: number): number;
}

const add: NumbersFn = (a, b) => {
	return a + b;
};

const sub: NumbersFn = (a, b) => {
	return a - b;
};

console.log('Add:', add(1, 2));

interface Named {
	readonly name: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name: string;
	age = 30;

	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + ' ' + this.name);
	}
}

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
