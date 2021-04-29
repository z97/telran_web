const baseUrl = 'https://jsonplaceholder.typicode.com/';
send.onclick = function () {
    const value = userName.value.trim();
    userName.value = '';
    fetch(`${baseUrl}users`).then(response = response.json())
        .then(users => {
            const index = users.findIndex(item => item.username === value);
            return user[index].id;
        })
        .then(id => fetch(`${baseUrl}/posts?userId=${id}`))
        .then(response => response.json())
        .then(posts => posts[0])
        .then(post => {
            const title = document.createElement('h1');
            title.appendChild(document.createTextNode(`Title: ${post.title}`));
            const postBody = document.createElement('h2');
            postBody.appendChild(document.createTextNode(`Body: ${post.body}`))
            document.body.append(title, postBody);
        })
        .catch(e => console.log(e));
}