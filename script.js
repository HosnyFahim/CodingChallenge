bundesländer = [];

async function init() {
    let response = await fetch('./bundesländer.json');
    bundesländer = await response.json();
    render();

}

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundesländer.length; i++) {
        const land = bundesländer[i];
        const population = (land['population'] + '').replace(' , ', ' , ');
        content.innerHTML += generateLink(land, population);

    }
}

function generateLink(land, population) {
    return `<a class="bundesländer-box" href="${land['url']}" target="_ blank">
    <div>${land['name']}</div>
    <div class="text-gray">${population} Millionen</div>
    </a>`
}