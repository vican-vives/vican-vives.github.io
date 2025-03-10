const setup = () => {
    document.getElementById("btnspaties").addEventListener("click", (e) => {
        let invoer = document.getElementById("invoer").value.replace(/ /g, '');
        console.log(maakMetSpaties(invoer));
    });
}

const maakMetSpaties = (inputText) => {
        inputText.replace(/ /g,'');
        let uitvoer = "";
    for (let i = 0; i < inputText.length; i++) {
        uitvoer += inputText[i] + " ";
    }
    return uitvoer.trim();
}

window.addEventListener("load", setup);