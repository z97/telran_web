const t = setInterval(move, 20);
let pos = 0;
function move(){
    if(pos < 150) {
        pos++;
        box.style.left = pos + 'px';
        box.style.top = pos + 'px';
    }else{
        clearInterval(t);
    }
}
