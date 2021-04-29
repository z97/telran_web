class Person {
    constructor(id, firstName, lastName, date) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = date;
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
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
        return (formatDate(new Date())) - formatDate(this._birthDate);
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }

    toString() {
        return `ID: ${this._id}, ${this._firstName}, ${this._lastName}, age: ${this.age}`;
    }
}

//====================================================================

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

    createEmployeeDOMElement(elemType) {
        const element = document.createElement(elemType);
        element.appendChild(document.createTextNode(this.toString()));
        return element;
    }
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year].join('-');
}

