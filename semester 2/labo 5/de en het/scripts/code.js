const setup = () => {
    document.getElementById("btndenaarhet").addEventListener("click", (e) => {
        let invoer = document.getElementById("txtinvoer").value.toLowerCase();
        let uitvoer = ""
        let vorige = 0;
        let huidige = 0
        while (huidige !== -1) {
            huidige = invoer.indexOf("de", vorige)
            uitvoer += invoer.slice(vorige, huidige) + "het"
            vorige = huidige + 2
        }
        console.log(uitvoer.slice(0, uitvoer.length - 3) + invoer.slice(invoer.length - 1, uitvoer.length))
    })
}
window.addEventListener("load", setup);