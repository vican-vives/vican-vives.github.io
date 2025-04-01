const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start.toString());
    console.log(start.toISOString());
    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());
}
window.addEventListener("load", setup);