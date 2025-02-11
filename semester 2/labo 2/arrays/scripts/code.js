let setup = () => {
    let familie = ["f1", "f2", "f3", "f4", "f5"];
    console.log(familie.length);
    for (let i = 0; i < familie.length; i++) {
        if (i % 2 === 0) {
            console.log(familie[i]);
        }
    }
    voegNaamToe(familie);
    console.log(familie.toString());
}

const voegNaamToe = (array) => {
    array.push(window.prompt("Wat is uw naam", "onbekend"));
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

window.addEventListener("load", setup);