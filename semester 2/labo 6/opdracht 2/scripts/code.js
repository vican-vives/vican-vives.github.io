const setup = () => {
    let li = document.querySelectorAll('li')

    for(let i = 0; i<li.length; i++) {
        li[i].setAttribute('class', 'listitem')
    }
    let element = document.createElement('img');
    element.setAttribute('src', 'images/cat.jpg');
    element.setAttribute('alt', 'cat photo');
    document.querySelector("body").appendChild(element);
}
window.addEventListener("load", setup);