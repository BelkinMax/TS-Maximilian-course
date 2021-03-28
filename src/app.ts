interface Admin {
	name: string;
	jobs: string[];
}

interface Employee {
	name: string;
	startDate: Date;
}

interface ProEmployeeInt extends Employee, Admin {}

type ProEmployee = Admin & Employee;

const e1: ProEmployee = {
	name: 'Max',
	jobs: ['Do something'],
	startDate: new Date(),
};

console.log(e1);

type Combo = string | number;
type Numeric = number | boolean;

type Universal = Combo & Numeric;

const test: Universal = 12;

type Unknown = Employee | Admin;

function printInfo(emp: Unknown) {
	console.log('Name:', emp.name);

	if ('jobs' in emp) {
		console.log(emp.jobs);
	}

	if ('startDate' in emp) {
		console.log(emp.startDate);
	}
}

printInfo(e1);
