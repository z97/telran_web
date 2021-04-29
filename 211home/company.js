class Company {
    constructor() {
        this._employees = [];
    }

    addEmployee(employee) {
        let index = this._employees.findIndex(empl => empl.id === employee.id);
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

    minAge() {
        return this._employees.reduce((min, p) => p.age < min ? p.age : min, this._employees[0].age);
    }

    maxAge() {
        return this._employees.reduce((min, p) => p.age > min ? p.age : min, this._employees[0].age);
    }

    avgSalary() {
        return this._employees.reduce((sum, p) => sum + p.salary, 0) / this._employees.length;
    }

    minSalary() {
        return this._employees.reduce((min, p) => p.salary < min ? p.salary : min, this._employees[0].salary);
    }

    maxSalary() {
        return this._employees.reduce((min, p) => p.age > min ? p.age : min, this._employees[0].age);
    }
}

addPerson.onclick = function () {
    const employee = new Employee(
        personId.value.trim(),
        firstName.value.trim(),
        lastName.value.trim(),
        age.value,
        salary.value);
    if (company.employees.findIndex(item => item.id === employee.id) >= 0) {
        alert(`Person with id = ${employee.id} exists`);
    } else {
        company.addEmployee(employee);
        const li = createInfoElement(employee.toString(), 'li');
        const buttonDel = createInfoElement('X', 'button');
        buttonDel.classList.add('del');
        buttonDel.onclick = function ({target}) {
            target.parentElement.remove();
            company.removeEmployee(employee.id);
            clearStats();
        }
        li.append(buttonDel);
        personsList.append(li);
        personId.value = firstName.value = lastName.value = age.value = salary.value = '';
    }
}
const company = new Company();

calcStats.onclick = function () {
    try {
        const divStats = document.createElement('div');
        let age = company.avgAge();
        const h3avg1 = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
        //====================================
        age = company.minAge();
        const h3min1 = createInfoElement(`Min age: ${age}`, 'h3');
        //====================================
        age = company.maxAge();
        const h3max1 = createInfoElement(`Max age: ${age}`, 'h3');
        //====================================
        let salary = company.avgSalary();
        const h3avg2 = createInfoElement(`Average salary: ${salary.toFixed(1)}`, 'h3');
        //====================================
        salary = company.minSalary();
        const h3min2 = createInfoElement(`Min salary: ${salary.toFixed(1)}`, 'h3');
        //====================================
        salary = company.maxSalary();
        const h3max2 = createInfoElement(`Max salary: ${salary.toFixed(1)}`, 'h3');
        divStats.append(h3avg1, h3min1, h3max1, h3avg2, h3min2, h3max2);
        if (stats.firstElementChild.nextElementSibling) {
            stats.replaceChild(divStats, stats.firstElementChild.nextElementSibling);
        } else {
            stats.appendChild(divStats);
        }
    } catch (e) {
        alert('no person for stats');
    }
};

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}