greeting();
window.nickName = 'Peter';
console.log(window.greeting === greeting)
console.log(nickName)
console.log(window.nickName = nickName);

function greeting(){
    console.log('Hello');
}

//var nickName = 'John'
nickName = 'John'