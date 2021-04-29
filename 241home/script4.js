const baseUrl = 'http://data.fixer.io/api/latest?access_key=dc70c55ec488eee558f817c1298f3b3b&format=1';


const p1 = new Promise(function (resolve, reject){
    const fromjs = from.value.trim();
    from.value = '';

})

convert.onclick = function () {
    const fromjs = from.value.trim();
    from.value = '';
    const tojs = to.value.trim();
    to.value = '';
    const amountjs = amount.value.trim();
    amount.value = '';
    fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(rateFrom => {
            const index = rateFrom.findIndex(item => item.rates === fromjs)
            return rateFrom[index].value;
        })
}