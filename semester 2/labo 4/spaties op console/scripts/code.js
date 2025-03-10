const setup = () => {
    document.getElementById("btnspaties").addEventListener("click", (e) => {
        let invoer = document.getElementById("invoer").value.replace(/ /g,'');
        let uitvoer = "";
        for (let i = 0; i < invoer.length; i++) {
            uitvoer += invoer[i] + " ";
        }
        console.log(uitvoer.trim());
    })
}
window.addEventListener("load", setup);