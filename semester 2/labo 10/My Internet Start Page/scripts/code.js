const setup = () => {
    document.getElementById("btnGo").addEventListener("click", analyseInput);
}

const analyseInput = () => {
    let input = document.getElementById("zoekopdracht").value;
    if (input.match("\/[a-z]{1} [a-z]*")) {
        if (input.substring(1, 2) === "g") {
            addCard("Google", input.substring(3), "https://www.google.com/search?q=" + input.substring(3));
            window.open("https://www.google.com/search?q=" + input.substring(3), "_blank");
        }
        else if (input.substring(1, 2) === "y") {
            addCard("Youtube", input.substring(3), "https://www.youtube.com/results?search_query=" + input.substring(3));
            window.open("https://www.youtube.com/results?search_query=" + input.substring(3), "_blank");
        }
        else if (input.substring(1, 2) === "x") {
            addCard("X", input.substring(3), "https://x.com/hashtag/C" + input.substring(3));
            window.open("https://x.com/hashtag/C" + input.substring(3), "_blank");
        }
        else if (input.substring(1, 2) === "i") {
            addCard("Instagram", input.substring(3), "https://www.instagram.com/explore/tags" + input.substring(3));
            saveInput()
            window.open("https://www.instagram.com/explore/tags" + input.substring(3), "_blank");
        }
        else {
            window.alert("Unknown command prefix")
        }
    } else {
        window.alert("Invalid command")
    }
}

const addCard = (cardtitle, cardtext, link) => {
    let template = `
    <div class="col-sm-4">
        <div class="card" id="` + cardtitle +`">
             <div class="card-body">
                  <h5 class="card-title">` + cardtitle + `</h5>
                  <p class="card-text">` + cardtext +`</p>
                  <a href="` + link + `" class="btn btn-primary" id="btn-` + cardtitle + `" target="_blank">Go!</a>
             </div>
        </div>
    </div>`
    document.getElementById("resultrow").innerHTML += template;
}

window.addEventListener("load", setup);


const createCardAndAppend = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div","col-4");
    let card = createElementWithClassName("div","card");
    card.classList.add(title.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div","card-body");
    let cardTitle = createElementWithClassNameAndText("h5",
        "card-title", title);
    let cardText = createElementWithClassNameAndText("p",
        "card-text", commandoSuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase()+"-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const saveLocalStorage = (title, commandoSuffix, url) => {
    let lsHistory;
    let historyObject = {
        title: title,
        text: commandoSuffix,
        url: url
    };
    lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if(!lsHistory){
        lsHistory = [];
    }
    lsHistory.push(historyObject);
    localStorage.setItem("vives.be.history", JSON.stringify(lsHistory));
};