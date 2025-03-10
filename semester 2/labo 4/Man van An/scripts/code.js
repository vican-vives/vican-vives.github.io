const setup = () => {
    document.getElementById("btnberekenindexOf").addEventListener("click", indexVan)
    document.getElementById("btnberekenlastIndexOf").addEventListener("click", laatsteIndexVan)
}

const indexVan = () => {
    let invoer = document.getElementById("invoer").value.toLowerCase();
    let aantal = -1;
    let vorige = -2;
    while (vorige !== -1) {
        vorige = invoer.indexOf("an", vorige + 2)
        aantal += 1
    }
    console.log(aantal);
}

const laatsteIndexVan = () => {
    let invoer = document.getElementById("invoer").value.toLowerCase();
    let aantal = -1;
    let vorige = invoer.length + 2;
    while (vorige !== -1) {
        vorige = invoer.lastIndexOf("an", vorige - 2)
        aantal += 1
    }
    console.log(aantal);
}

window.addEventListener("load", setup);