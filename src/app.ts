class Department {
	private employees: string[] = [];

	constructor(private name: string) {}

	/* --------------------------------- Getters -------------------------------- */

	get getDescription(): string {
		return `
    Department:        ${this.name};
    Employeees num.:   ${this.employees.length} employees;
    `;
	}

	get getEmployees(): string[] {
		return this.employees;
	}

	/* --------------------------------- Setters -------------------------------- */

	set setEmployee(employee: string) {
		this.employees.push(employee);
	}
}

const accounting = new Department('Accounting');

accounting.setEmployee = 'Max';
accounting.setEmployee = 'Bob';
accounting.setEmployee = 'Lara';

console.log(accounting.getDescription);
console.log(accounting.getEmployees);
