addItem.addEventListener('click', fOnClick);

function fOnClick() {
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

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }
    if (event.code === "Enter") {
        fOnClick();
    }
    refresh(); // without it could not work
    // Consume the event so it doesn't get handled twice
    event.preventDefault();
}, true);

