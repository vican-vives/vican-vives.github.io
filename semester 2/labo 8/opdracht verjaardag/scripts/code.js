const setup = () => {
    let birthday = new Date(2004, 8, 11)
    let today = new Date();
    today.getDate()
    console.log(Math.floor((today - birthday) / (1000 * 60 * 60 * 24)).toString());
}
window.addEventListener("load", setup);