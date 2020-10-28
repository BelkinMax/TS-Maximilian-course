class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('id1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Anna');

accounting.describe();
accounting.printEmployeeInfo();