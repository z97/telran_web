const base_url = 'http://data.fixer.io/api/latest';
const api_key = 'dc70c55ec488eee558f817c1298f3b3b';

fetch(`${base_url}?access_key=${api_key}`)
    .then(response => response.json())
    .then(data => data.rates)
    .then(a => {for(let i = 0; i < Object.keys(a).length; i++){
        const res = (Object.keys(a))[i];
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(`${res}`));
        from.appendChild(option)
        let b = option.cloneNode(true)
        to.appendChild(b);
    }})

calculate.addEventListener('click', () => {
    fetch(`${base_url}?access_key=${api_key}`)
        .then(response => response.json())
        .then(data => data.rates)
        .then(rates => {
            const curFrom = from.value;
            const curTo = to.value;
            const amount = sum.value.trim();
            const res = rates[curTo] / rates[curFrom] * amount;
            const h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(`Result = ${res.toFixed(2)}`));
            result.innerHTML = '';
            result.appendChild(h1);
        })
})