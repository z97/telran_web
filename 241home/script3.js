const baseUrl = 'http://data.fixer.io/api/latest?access_key=dc70c55ec488eee558f817c1298f3b3b&format=1';

convert.onclick = function () {
    const fromjs = from.value.trim();
    from.value = '';
    const tojs = to.value.trim();
    to.value = '';
    const amountjs = amount.value.trim();
    amount.value = '';
    fetch(`${baseUrl}&symbols=${fromjs}`)
        .then(response => response.json())
        .then(body => {
            const h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(`Title: ${Object.values(body.rates)}`));
            document.body.appendChild(h1);
        }).then(
        fetch(`${baseUrl}&symbols=${tojs}`)
            .then(response => response.json())
            .then(body => {
                    const h1 = document.createElement('h2');
                    h1.appendChild(document.createTextNode(`Title2: ${Object.values(body.rates)}`));
                    document.body.appendChild(h1);
                }
            )
    ).then(() =>
    )

}