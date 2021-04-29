const baseUrl = 'http://data.fixer.io/api/latest?access_key=dc70c55ec488eee558f817c1298f3b3b&format=1';
convert.onclick = function (){
    const amountjs = amount.value.trim();
    amount.value = '';
    const fromjs = from.value.trim();
    from.value = '';
    const tojs = to.value.trim();
    to.value = '';

    fetch(`${baseUrl}&symbols=${tojs}`)
        .then(response => response.json())
        .then(data => data.rates)
        .then(rate => {
            return data.value;
        })

}