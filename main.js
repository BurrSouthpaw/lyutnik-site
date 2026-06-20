const button = document.getElementById("themeBtn");

button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
});

button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
});

document.addEventListener("keydown", (event) => {

    if(event.key.toLowerCase() === "l"){
        document.body.classList.toggle("light-theme");
    }

});