const baseUrl = 'http://data.fixer.io/api/latest?access_key=dc70c55ec488eee558f817c1298f3b3b&format=1';
convert.onclick = function () {
    const fromjs = from.value.trim();
    from.value = '';
    const amountjs = amount.value.trim();
    amount.value = '';
    fetch(`${baseUrl}&symbols=${fromjs}`)
        .then(response => response.json())
        .then(body => {
            const res = document.createElement('h1')
            res.appendChild(document.createTextNode(`sum in eur: ${amountjs / Object.values(body.rates)}`))
            document.body.append(res);
        })
}