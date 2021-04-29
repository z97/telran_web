const baseUrl = 'http://data.fixer.io/api/latest?access_key=dc70c55ec488eee558f817c1298f3b3b&format=1';

convert.onclick = function getResponse() {
    const amountjs = amount.value.trim();
    amount.value = '';
    const x = function (){
        rateFrom().then(response => {return response.json()})
    }
    console.log(rateFrom().then(response => {
        return response.json();
    }));



}

async function rateFrom(){
    const fromjs = from.value.trim();
    from.value = '';
    let response = await fetch(`${baseUrl}&symbols=${fromjs}`);
    let content = await response.json();
    let key;
    for(key in content){
        var obj = content[key];
    }
    let res = obj[fromjs];
    return res;
}

async function rateTo() {
    const amountjs = amount.value.trim();
    amount.value = '';
    const tojs = to.value.trim();
    to.value = '';
    let response = await fetch(`${baseUrl}&symbols=${tojs}`);
    let content = await response.json();
    let key;
    for (key in content) {
        var obj = content[key];
    }
    let res = obj[tojs];
    return res;
}

