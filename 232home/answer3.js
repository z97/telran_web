for(var i = 0; i < 10; i++){
    setTimeout(function (){
        console.log(i++ % 10);
    }, 1000);
}