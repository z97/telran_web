const AGE = 18;
const CONTRACT = new Date().getFullYear();
const NAME = 'Player';

const club = {
    clubName: 'Zarya',
    year: 1925,
    city: 'Lugansk',
    staff: {
        gk: 2,
        df: 6,
        mf: 10,
        amf: 3,
        fw: 5
    }
}

const playerGen = (i, pos) => {
    return {
        fName: `${NAME}${pos}_${i + 1}`,
        age: AGE + Math.floor(Math.random() * Math.floor(7)),
        contract: CONTRACT + Math.floor(Math.random() * Math.floor(4)),
        position: pos
    }
}

const team = {};

for (key in club.staff) {
    team[key] = []
    for (let x = 0; x < club.staff[key]; x++) {
        team[key].push(playerGen(x, key))
    }
}

club.team = team;

console.log(club);

const app = document.querySelector('#app');
const title = document.createElement('h1');
title.innerText = `Football club ${club.clubName}(${club.city}) since ${club.year}`;
app.appendChild(title);
const ul = document.createElement('li';
app.appendChild(ul);

for(key in club.staff){
    const li = document.createElement('li');
    const innerUI = document.createElement('ui');
    for (let x = 0; x < club.staff[key])
}