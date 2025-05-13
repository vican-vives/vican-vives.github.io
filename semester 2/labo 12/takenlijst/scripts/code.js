const global = {
    LIJST_TASKS: []
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndDraggable = (element, className, id) => {
    let e = createElementWithClassName(element, className);
    e.setAttribute("id", id);
    e.setAttribute("draggable", "true")
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const removeChildren = (id) => {
    let tasks = document.getElementById(id);
    while (tasks.children.length > 1) {
        tasks.removeChild(tasks.lastChild);
    }
}

const dropeventlistener = (id) => {
    let kolom = document.getElementById(id)

    kolom.addEventListener("dragover", e => {
        e.preventDefault();
    })

    kolom.addEventListener("drop", e => {
        e.preventDefault();
        const idd = e.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(idd);
        kolom.appendChild(draggedElement);
        global.LIJST_TASKS[idd].status = id
        localStorage.setItem("Takenlijst", JSON.stringify(global.LIJST_TASKS))
    });
}

const placeTasks = (lijst) => {
    let kolomen = document.getElementsByClassName("column")
    for (let i = 0; i < kolomen.length; i++) {
        removeChildren(kolomen[i].id);
    }
    for (let i = 0; i < lijst.length; i++) {
        let taak = createElementWithClassNameAndDraggable("div", "task", i);
        let titel = createElementWithClassNameAndText("h2", "titel", lijst[i].titel);
        let beschrijving = createElementWithClassNameAndText("p", "beschrijving", lijst[i].beschrijving);
        let tijd = createElementWithClassNameAndText("p", "tijd", lijst[i].tijd);
        taak.appendChild(titel);
        taak.appendChild(beschrijving);
        taak.appendChild(tijd);

        let takenlijst = document.getElementById(lijst[i].status)
        takenlijst.appendChild(taak);

        taak.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain", i);
        })
    }
}

makeTask = () => {
    let titel = document.getElementById("txttitel");
    let beschrijving = document.getElementById("txtbeschrijving");
    const now = new Date();
    let tijd = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    let task = {titel: titel.value.trim(), beschrijving: beschrijving.value.trim(), tijd: tijd, status: "todo"};
    global.LIJST_TASKS.push(task);
    titel.value = "";
    beschrijving.value = "";
    placeTasks(global.LIJST_TASKS);
    localStorage.setItem("Takenlijst", JSON.stringify(global.LIJST_TASKS))
}

const setup = () => {
    let takenlijst = localStorage.getItem("Takenlijst");
    let JSONtakenlijst = JSON.parse(takenlijst);
    if (JSONtakenlijst) {
        placeTasks(JSONtakenlijst);
        global.LIJST_TASKS = JSONtakenlijst;
    }

    let kolomen = document.getElementsByClassName("column")
    for (let i = 0; i < kolomen.length; i++) {
        dropeventlistener(kolomen[i].id);
    }

    document.getElementById("btntaaktoevoegen").addEventListener("click", makeTask);

}
window.addEventListener("load", setup);