class Department {
	protected employees: string[] = [];

	constructor(private readonly id: number, private name: string) {}

	get getDescription(): string {
		return `
    ID:                ${this.id};
    Department:        ${this.name};
    Employeees num.:   ${this.employees.length} employees;
    `;
	}

	get getEmployees(): string[] {
		return this.employees;
	}

	set setEmployee(employee: string) {
		this.employees.push(employee);
	}
}

class AccountingDepartment extends Department {
	private managers: string[] = [];

	constructor(id: number) {
		super(id, 'Accounting');
	}

	get getManagers() {
		return this.managers;
	}

	set setManager(manager: string) {
		this.managers.push(manager);
	}
}

class ITDepartment extends Department {
	private admins: string[] = [];

	constructor(id: number) {
		super(id, 'IT');
	}

	get getAdmins() {
		return this.admins;
	}

	set setAdmin(admin: string) {
		this.admins.push(admin);
	}
}

const accounting = new AccountingDepartment(13);
const it = new ITDepartment(12);

/* -------------------------------------------------------------------------- */
/*                                    LOGS                                    */
/* -------------------------------------------------------------------------- */

accounting.setEmployee = 'Max';
accounting.setEmployee = 'Bob';
accounting.setEmployee = 'Lara';
accounting.setEmployee = 'Tom';

accounting.setManager = 'Bob';
accounting.setManager = 'Lara';

it.setEmployee = 'Lorem';
it.setEmployee = 'Ipsum';
it.setEmployee = 'Random';

it.setAdmin = 'Random';

console.log(accounting.getDescription);
console.log(accounting.getEmployees);
console.log(accounting.getManagers);

console.log(it.getDescription);
console.log(it.getEmployees);
console.log(it.getAdmins);
