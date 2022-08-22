let bundesländer = [];
let letters = [];

async function init() {
    let response = await fetch('./bundesländer.json');
    bundesländer = await response.json();
    render();

}

function render(filter) {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundesländer.length; i++) {
        const land = bundesländer[i];
        const population = (land['population'] + '').replace(' , ', ' , ');
        const firstLetter = land['name'].charAt(0); // first letter as String

        if (!filter || filter == firstLetter) {
            content.innerHTML += generateLink(land, population);
        }

        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }
    }
    renderLetter();
}

function setFilter(letter) {
    render(letter);
}

function renderLetter() {
    let letterbox = document.getElementById('letterBox');
    letterbox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        letterbox.innerHTML += `<div onclick="setFilter('${letter}')" class="letter">${letter}</div>`;
    }
}

function generateLink(land, population) {
    return `<a class="bundesländer-box" href="${land['url']}" target="_ blank">
    <div>${land['name']}</div>
    <div class="text-gray">${population} Millionen</div>
    </a>`
}