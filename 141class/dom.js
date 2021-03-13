//console.log(document.body.innerHTML);
//document.body.innerHTML = '<h1>Hello</h1>'
const div1 = document.getElementById('div1');
//console.log(div1.innerHTML);
div1.style.border = '2px solid black';
const p = div1.children;
console.log(p.length);
for(let i = 0; i < p.length; i++){
    p[i].innerHTML = `<span>text ${i+1}</span>`;
}
document.getElementsByTagName(p);
document.getElementsByClassName(`box`);
document.querySelectorAll(`#div1>p`);
document.querySelector(`#div1>p`);
const newP = document.createElement('p');
const newPText = document.createTextNode('text created with special method');
newP.appendChild(newPText);
//div1.appendChild(newP);
//div1.insertBefore(newP, );




const newP2 = document.createElement('p');
const newP2Text = document.createTextNode('p2 text');
newP2.appendChild(newP2Text);
div1.replaceChild(newP2, div1.firstElementChild);


div1.removeChild(div1.firstElementChild.nextElementSibling);
div1.removeChild(div1.children[2]);
