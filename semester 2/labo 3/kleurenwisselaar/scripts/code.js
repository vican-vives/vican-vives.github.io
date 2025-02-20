const setup = () => {
    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            if (buttons[i].className === "button kleur") {
                buttons[i].classList.remove("kleur");
            }
            else {
                buttons[i].classList.add("kleur");
            }
            console.log(buttons[i].className);
        })
    }
}

window.addEventListener("load", setup);