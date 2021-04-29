class User {
    constructor(nickName) {
        this.nickName = nickName;
        //this.infoFunc = this.infoFunc.bind(this);
    }

    infoFunc = function (){
        console.log(`Nickname = ${this.nickName}`)
    }

    infoArrow = () => {
        console.log(`Nickname = ${this.nickName}`)
    }
}

const peter = new User('Peter');
console.log('======= Funk ========');
peter.infoFunc();
console.log('======= Arrow ========');
peter.infoArrow();
console.log('======= Lost =========');
const john = {nickName: 'John'};
fn(peter.infoFunc.bind(john));
const f = peter.infoFunc.bind({nickName: 'Mary'});
fn();
peter.infoFunc.call({nickName: 'Mary'});
peter.infoFunc.apply(john);
function fn(info){ //info = peter.infoFunc
    info();
}