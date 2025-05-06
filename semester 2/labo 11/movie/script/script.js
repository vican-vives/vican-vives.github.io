const global =  {
    LIJST_LIKED: [],
    LIJST_DISLIKED: []
}

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndId = (element, className, IdName) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    e.setAttribute("id", IdName);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createElementWithClassNameAndImage = (className, src, alt) => {
    let e = createElementWithClassName("img", className);
    e.setAttribute("src", src);
    e.setAttribute("alt", alt);
    return e
}

const removeLike = (likebutton, index) => {
    likebutton.classList.remove("liked");
    global.LIJST_LIKED.splice(global.LIJST_LIKED.indexOf(movies[index].id), 1)
}

const removeDislike = (dislikebutton, index) => {
    dislikebutton.classList.remove("disliked");
    global.LIJST_DISLIKED.splice(global.LIJST_DISLIKED.indexOf(movies[index].id), 1)
}

const updateCount = () => {
    document.getElementById("like").innerText = global.LIJST_LIKED.length.toString();
    document.getElementById("dislike").innerText = global.LIJST_DISLIKED.length.toString();
}

const createLikedMovie = (index) => {
    let movie = createElementWithClassNameAndId("div", "movie", "movie" + movies[index].id);
    let title = createElementWithClassNameAndText("p", "title", movies[index].title);
    let trash = createElementWithClassNameAndId("i", 'fas fa-trash', "trash" + movies[index].id);
    movie.appendChild(title);
    movie.appendChild(trash);

    let likebar = document.getElementById("likebar")
    likebar.appendChild(movie);
}

const removeLikedMovie = (index) => {
    let likebar = document.getElementById("likebar")
    let movie = document.getElementById("movie" + movies[index].id)
    likebar.removeChild(movie);
}

const setVisibility = () => {
    let likebar = document.getElementById("likebar")
    if (likebar.children.length > 2) {
        likebar.style.visibility = "visible";
    }
    else {
        likebar.style.visibility = "hidden";
    }
}

const setup = () => {
    for (let i = 0; i < movies.length; i++) {
        let movie = createElementWithClassName("div", "movie")
        let title = createElementWithClassNameAndText("p", "title", movies[i].title);
        let buttons = createElementWithClassName("div", "buttons");
        let likebutton = createElementWithClassNameAndId("i", 'fas fa-thumbs-up', "likebutton" + movies[i].id)
        let dislikebutton = createElementWithClassNameAndId("i", 'fas fa-thumbs-down', "dislikebutton" + movies[i].id)
        let image = createElementWithClassNameAndImage("image", movies[i].imageUrl, movies[i].title)
        let description = createElementWithClassNameAndText("p", "description", movies[i].description);
        movie.appendChild(title);
        buttons.appendChild(likebutton);
        buttons.appendChild(dislikebutton);
        movie.appendChild(buttons)
        movie.appendChild(image);
        movie.appendChild(description);

        let movielist = document.getElementById("movielist")
        movielist.appendChild(movie);

        document.getElementById("likebutton" + movies[i].id).addEventListener("click", (e) => {
            let likebutton = document.getElementById("likebutton" + movies[i].id)
            let dislikebutton = document.getElementById("dislikebutton" + movies[i].id)
            if (likebutton.classList.contains("liked")) {
                removeLike(likebutton, i);
                removeLikedMovie(i);
            }
            else {
                if (dislikebutton.classList.contains("disliked")) {
                    removeDislike(dislikebutton, i);
                }
                likebutton.classList.add("liked");
                global.LIJST_LIKED.push(movies[i].id);

                createLikedMovie(i);

                document.getElementById("trash" + movies[i].id).addEventListener("click", (e) => {
                    document.getElementById("trash" + movies[i].id).removeEventListener("click", (e) => {})
                    removeLike(likebutton, i);
                    removeLikedMovie(i);
                    updateCount();
                    setVisibility();
                })
            }
            updateCount();
            setVisibility();
        })

        document.getElementById("dislikebutton" + movies[i].id).addEventListener("click", (e) => {
            let likebutton = document.getElementById("likebutton" + movies[i].id)
            let dislikebutton = document.getElementById("dislikebutton" + movies[i].id)
            if (dislikebutton.classList.contains("disliked")) {
                removeDislike(dislikebutton, i);
            }
            else {
                if (likebutton.classList.contains("liked")) {
                    removeLike(likebutton, i);
                    removeLikedMovie(i);
                }
                dislikebutton.classList.add("disliked");
                global.LIJST_DISLIKED.push(movies[i].id);
            }
            updateCount();
            setVisibility();
        })

    }
}
window.addEventListener("load", setup);

