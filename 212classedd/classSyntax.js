class Person {
    constructor(id, firstName, lastName, date) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = date;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get id() {
        return this._id;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get birthDate() {
        return this._birthDate;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }

    toString() {
        return `ID: ${this._id}, ${this._firstName}, ${this._lastName}, age: ${this.age}`;
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, date, salary) {
        super(id, firstName, lastName, date);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > this._salary) {
            this._salary = +salary;
        }
    }

    toString() {
        return super.toString() + `, salary: ${this._salary}`;
    }

    createEmployeeDOMElement(elemType){
        const element = document.createElement(elemType);
        element.appendChild(document.createTextNode(this.toString()));
        return element;
    }
}

class Company {
    constructor() {
        this._employees = [];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(empl => empl.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    get employees() {
        return [...this._employees];
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(empl => empl.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    avgAge() {
        return this._employees.reduce((sum, p) => sum + p.age, 0) / this._employees.length;
    }

}

const john = new Person(1, 'John', 'Smith', new Date('1990-09-15'));
console.log(john);
john.firstName = 'Peter';
console.log(john.firstName);
console.log(john.age);
const peter = new Employee(2, 'Peter', 'Jackson', new Date('1993-11-19'), 15000);
console.log(peter);
peter.salary = 17000;
console.log(peter.salary);
console.log(peter.toString());
console.log('=======================');
const firm = new Company();
let check = firm.addEmployee(peter);
console.log(check);
check = firm.addEmployee(new Employee(1, 'John', 'Smith', new Date('1990-09-15'), 15000));
console.log(check);
check = firm.addEmployee(peter);
console.log(check);
const arr = firm.employees;
arr.forEach(console.log);
firm.employees.forEach(console.log);
arr.length = 0;
firm.employees.forEach(console.log);
let res = firm.avgAge();
console.log(res);
console.log('==================');
firm.employees.forEach(e => console.log(e.createEmployeeDOMElement('li')));