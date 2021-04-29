fetch('https://jsonplaceholder.typicode.com/posts4/16')
    //.then(response => console.log(response.headers.get('Content-Type')))
    .then(response => response.json())
    .then(body => {
        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(`Title: ${body.title}`));
        document.body.appendChild(h1);
    })
    .catch(e => console.log(e));