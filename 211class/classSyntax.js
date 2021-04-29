class Person {
    constructor(id, firstNAme, lastName, date) {
        this._id = id;
        this._lastName = lastName;
        this._firstName = firstNAme;
        this._birthDate = date;
    }

    get firstName() {
        return this._firstName;
    }

    set firstname (firstName) {
        this._firstName = firstName;
    }

    get age(){
        const ageDiffMs = (new Date() )
    }

    fullName = function (){
        return `${this._firstName} ${this._lastName}`;
    }
}

class Employee extends Person{

    constructor(id, firstNAme, lastName, date) {
        super(id, firstNAme, lastName, date);
        this._salary = +salary
    }

    get salary(){
        return this._salary;

    }

    toString(){
        return super.toString() + `, salary: ${this._salary}`;
    }

    set salary(salary){
        if(salary > this._salary){
            this._salary = + salary;
        }
    }
}

class Company{
    constructor() {
        this._employees = [];
    }

    addEmployee(employee){
        const index = this._employees.findIndex((e => e.id === employee.id));
        if(index < 0){
            this._employees.push(employee);
        }
        return index < 0;
    }

    get employees(){
        return this._employees;
    }
}

const john = new Person(1, 'John', 'Smith', new Date('1990-09-15'));
console.log(john.fullName());
john.firstName = 'Peter';
console.log(john.fullName());
console.log(john.age)
const  peter = new Employee(2, 'Peter', 'jackson', new Date('1993-11-19', 15000));
console.log(peter);
console.log('==================');
const firm = new Company();
check = firm.addEmployee(1, 'John', 'Smith', new Date('1990-09-15'), 17000);
console.log(check);
check = firm.addEmployee()