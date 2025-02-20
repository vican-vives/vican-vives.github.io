const setup = () => {
   let button = document.getElementById("btnherbereken");
   button.addEventListener("click", herbereken)
}

const herbereken = () => {
    let prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");
    let optelling = 0;

    for (let i = 0; i < aantal.length; i++) {
        let zonderbtw = parseFloat(prijs[i].innerText) * parseFloat(aantal[i].value)
        subtotaal[i].textContent = (zonderbtw + zonderbtw * parseFloat(btw[i].innerText) * 0.01).toFixed(2) + " Eur";
        optelling += parseFloat(subtotaal[i].innerText);
    }
    totaal.innerHTML = optelling.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);