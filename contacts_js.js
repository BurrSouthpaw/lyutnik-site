const btn = document.getElementById("showMessage");
const message = document.getElementById("message");
const section = document.getElementById("contactSection");

btn.addEventListener("click", () => {

    message.innerHTML =
        "<h3>Спасибо за интерес к группе «Лютник»!</h3>";

});

document.addEventListener("keydown", (event) => {

    if(event.code === "Space"){
        section.classList.add("animate");
    }

});