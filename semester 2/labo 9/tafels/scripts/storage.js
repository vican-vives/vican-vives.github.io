const storeTafel = (number, date) => {
    let tafels = localStorage.getItem("tafels") === null ? [] : JSON.parse(localStorage.getItem("tafels"));
    tafels.push({number, date});

    localStorage.setItem("tafels", JSON.stringify(tafels));
}

const restoreTafels = () => {
    let tafels = localStorage.getItem("tafels") === null ? [] : JSON.parse(localStorage.getItem("tafels"));
    for (let i = 0; i < tafels.length; i++) {
        addTableItem(tafels[i].number, new Date(tafels[i].date));
    }
};