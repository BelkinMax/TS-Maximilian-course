class Department {
  //private employees: string[] = []; // only can access from department class
  protected employees: string[] = []; // can acces from Department class and all that extends it

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }

  addReport(report: string) {
    this.reports.push(report);
  }
}

const itDep = new ITDepartment("id2", ["Bob"]);
const accountingDep = new AccountingDepartment("id1", ["Report 1", "Report 2"]);

accountingDep.addEmployee("Maxim");
accountingDep.addEmployee("Anna");

itDep.addEmployee("Bob");
itDep.addEmployee("Sara");

accountingDep.describe();
accountingDep.printEmployeeInfo();
itDep.describe();
itDep.printEmployeeInfo();

accountingDep.addReport("New report");

console.log(itDep);
console.log(accountingDep);
