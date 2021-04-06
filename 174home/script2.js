const addItem = $('#addItem');
const item = $('#item');
const todoList = $('#todoList');
addItem.on('click', createItem);
item.on('keyup', function (e){
    if(e.key ==='Enter'){
        createItem();
    }
});

function createItem(){
    const text = item.val().trim();
    if (text) {
        if(!todoList.children().length){
            addButtonClear();
        }
        const textNode = document.createTextNode(text);
        const buttonDel = $('<button></button>').text('x').addClass('del')
        buttonDel.on('click',function (e) {
            $(e.currentTarget).parent().remove();
            if(!todoList.children().length){
                todoList.next().remove();
            }
        });
        todoList.append($('<li></li>').text(text).append(buttonDel));
    }
    item.val('');
}

function addButtonClear(){
    const buttonClear = $('<button></button>').text('Clear');
    buttonClear.on('click', function (){
        todoList.empty();
        buttonClear.remove();
    })
    todoList.after(buttonClear);
}