const setup = () => {
    let button = document.getElementById("btnChange");
        button.addEventListener('click', e => {
        let element = document.createElement('p');

        document.querySelector("#myDIV").appendChild(element);
    })
}
window.addEventListener("load", setup);