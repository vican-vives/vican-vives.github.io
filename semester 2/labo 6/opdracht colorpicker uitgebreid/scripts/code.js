const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    let element = document.createElement('div');
    document.querySelector("body").appendChild(element);

    let save = document.getElementById("btnSave");
    save.addEventListener('click', saveColor)

}

const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
    document.getElementById("swatch").style.backgroundColor="rgb("+red+", "+green+", "+blue+")";
}

const saveColor = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    console.log(red);

    let swatchComponent = document.createElement("div")
    swatchComponent.style.backgroundColor="rgb("+red+", "+green+", "+blue+")";
    swatchComponent.classList.add("swatchComponent");

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X"
    deleteBtn.classList.add("deleteBtn")

    deleteBtn.addEventListener("click", () => {
        deleteBtn.remove()
        swatchComponent.remove()
    })

    swatchComponent.appendChild(deleteBtn)

    document.getElementById("swatchContainer").appendChild(swatchComponent)

}


window.addEventListener("load", setup);