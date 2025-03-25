const setup = () => {
    document.addEventListener('input', event => {
        let statusKip = document.getElementById("statusKip");
        let txt = document.getElementById("txt");
        let selectedIndex=statusKip.selectedIndex;
        let option=statusKip.options[selectedIndex];
        let tekst = "Hierboven een kip "+option.text.toLowerCase()
        txt.innerHTML = tekst;
        if (option.text === "met ei") {
            let photo = document.getElementById("img")
            photo.classList.remove("hidden")
            photo.src = "./with-egg.png"
            photo.alt = "chicken with egg"
        }
        else if (option.text === "zonder ei") {
            let photo = document.getElementById("img")
            photo.classList.remove("hidden")
            photo.src = "./without-egg.png"
            photo.alt = "chicken without egg"
        }
        let note = document.getElementById("note")
        let letter = document.getElementById("letter")
        let aantalKeerLetter = 0;
        for (let i = 0; i < tekst.length; i++) {
            if (i === letter.value) {
                aantalKeerLetter++;
            }
        note.innerHTML = "Letter " + letter.value + " komt " + aantalKeerLetter + " keer voor in bovenstaande zin."
        }
    })

}
window.addEventListener("load", setup);