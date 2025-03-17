const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", changeToCat)
    document.getElementById("imgPhoto").addEventListener("mouseout", changeToSchool)

}

const changeToCat = () => {
    let photo = document.getElementById("imgPhoto")
    photo.src = "./images/cat.jpg"
    photo.alt = "cat"
    document.getElementById("txtText").innerText = "school of cats"
}

const changeToSchool = () => {
    let photo = document.getElementById("imgPhoto")
    photo.src = "./images/vives.png"
    photo.alt = "hogeschool vives"
    document.getElementById("txtText").innerText = "hogeschool VIVES"
}

window.addEventListener("load", setup);