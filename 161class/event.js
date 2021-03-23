button.addEventListener('click', display());
button.addEventListener('click', function (e){
    console.log(e.target.clientX, e.target.clientY);
})

const names = [name1, name2];
for(let i = 0; i < names.length; i++){
    names[i].onkeyup = changeText;
}

function changeText(event){
    e.target.value = e.target.value.toUpperCase()
}

function display(){
    for (let i = 0; i < names.length; i++){
        const p = document.createElement('p');
        const text = document.createTextNode(names[i].value);
        p.appendChild(text);
        document.body.appendChild(p);
    }
}