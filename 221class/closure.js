let nickName = 'John';
function greeting(){
    let nickName = 'Petya';
    return function (){
        let NickName = 'Tigran';
        console.log('hello' `${nickName}`)
    }
}

nickName = 'Rabindranat';
const hello = greeting();
hello();