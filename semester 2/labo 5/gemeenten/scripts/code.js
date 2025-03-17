const setup = () => {
    let ul = document.getElementById('gemeenten');
    let invoer = ""
    let uitvoer = ""
    while (invoer !== "stop") {
        invoer = window.prompt("gemeente:");
        if (invoer !== "stop")
            uitvoer += "<option>"+invoer+"</option>";
    }
    ul.innerHTML = uitvoer;
}
window.addEventListener("load", setup);