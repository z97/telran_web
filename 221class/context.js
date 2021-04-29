console.log(this === window);
//const name = function (){
    //console.log(this);
//  return `${this.firstName} ${this.lastName}`
//}

const name = () => function (){
    //console.log(this);
    return `${this.firstName} ${this.lastName}`
}


const john = {
    firstName: 'John',
    lastName: 'Smith'
}

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson'
}

john.fullName = name;
peter.fullName = name;
console.log(john.fullName());
console.log(peter.fullName());
console.log(name());
