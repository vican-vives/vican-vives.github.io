const setup = () => {
    let sldRed = document.getElementById("sldRed");
    let sldGreen = document.getElementById("sldGreen");
    let sldBlue = document.getElementById("sldBlue");
    let sliders = document.getElementsByClassName("slider");
    let swatch = document.getElementsByClassName("swatch");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

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

window.addEventListener("load", setup);