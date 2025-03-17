const setup = () => {
    document.getElementById("btntrigram").addEventListener("click", toonTrigrams)
}

const toonTrigrams = () => {
    let invoer = document.getElementById("txtinvoer").value;
    let ul = document.getElementById("list");
    let list = getTrigrams(invoer)
    let uitvoer = ""
    for (let i = 0; i < list.length; i++) {
        uitvoer += "<li>"+list[i]+"</li>"
    }
    ul.innerHTML = uitvoer;
}

const getTrigrams = (tekst) => {
    let trigrams = [];
    for (let i = 0; i < tekst.length - 2; i++) {

        trigrams.push(tekst.slice(i, i + 3));
    }
    return trigrams
}

window.addEventListener("load", setup);