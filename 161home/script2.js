function tasks(){
    const text = item.value.trim();
    if (text) {
        const textNode = document.createTextNode(text);
        const textDel = document.createTextNode('X');
        const buttonDel = document.createElement("button");
        buttonDel.appendChild(textDel);
        buttonDel.classList.add('del');
        buttonDel.onclick = function (e) {
            //todoList.removeChild(liElem);
            //e.target.parentElement.remove();
            e.currentTarget.parentElement.remove();

        }
        const liElem = document.createElement('li');
        //============================
        liElem.append(textNode, buttonDel);
        //============================
        todoList.appendChild(liElem);
    }
    item.value = '';
}

let inputClick = document.getElementById('addItem');
inputClick.addEventListener('click', tasks);

let inputKey = document.getElementById("item");
inputKey.addEventListener("keyup", event => {
    if (event.isComposing || event.keyCode === 13) {
        tasks();
    }
});