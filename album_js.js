const albums = document.querySelectorAll(".album");

let current = 0;

document.addEventListener("keydown", (event) => {

    albums[current].classList.remove("selected");

    if(event.key === "ArrowRight"){
        current++;

        if(current >= albums.length){
            current = 0;
        }
    }

    if(event.key === "ArrowLeft"){
        current--;

        if(current < 0){
            current = albums.length - 1;
        }
    }

    albums[current].classList.add("selected");

});