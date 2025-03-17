const setup = () => {
    let ul = document.getElementById('gemeenten');
    let invoer = ""
    let uitvoer = ""
    while (invoer !== "stop") {
        invoer = window.prompt("gemeente:");
        uitvoer += "<option>"+invoer+"</option>";
    }
    ul.innerHTML = uitvoer;
}
window.addEventListener("load", setup);