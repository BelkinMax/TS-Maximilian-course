interface Person {
	name: string;
	age: number;
	isMale: boolean;

	greet(phrase: string): void;
}

let user_1: Person;

user_1 = {
	name: 'Max',
	age: 25,
	isMale: true,

	greet(phrase) {
		console.log(phrase + ' ' + this.name);
	},
};

user_1.greet('Hello');
