const setup = () => {
    let global = {
        IMAGE_NUMBER: 0, // nummer van de huidige figuur
        IMAGE_COUNT: 5, // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/", // map van de figuren
        IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0, // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
    }

    const start = () => {
        document.querySelector("input").remove()
        let item = document.getElementById("item");
        item.addEventListener('click', clickMove);
        timeMove();
    }

    const timeMove = () => {
        moveItem();
    }

    const clickMove = () => {
        if (global.IMAGE_NUMBER === 0) {
            clearTimeout(global.timeoutId);
            window.alert("GAME OVER");
        }
        else {
            moveItem()
            global.score += 1;
            document.getElementById("score").innerHTML = global.score;
        }
    }

    const moveItem = () => {
        console.log("change place");

        let item=document.getElementById("item");
        let playField=document.getElementById("playField");
        let maxLeft=playField.clientWidth - global.IMAGE_SIZE;
        let maxHeight=playField.clientHeight - global.IMAGE_SIZE;

        let left=Math.floor(Math.random()*maxLeft);
        let top=Math.floor(Math.random()*maxHeight);
        item.style.left=left+"px";
        item.style.top=top+"px";

        global.IMAGE_NUMBER = Math.floor(Math.random() * global.IMAGE_COUNT)
        item.src = global.IMAGE_PATH_PREFIX + global.IMAGE_NUMBER + global.IMAGE_PATH_SUFFIX
        clearTimeout(global.timeoutId);
        global.timeoutId=setTimeout(timeMove, global.MOVE_DELAY);

    };

    document.getElementById("btnStart").addEventListener("click", start);

};

window.addEventListener("load", setup);


