let cd = document.getElementById("cd");
let player = document.getElementById("player");
let tracks = document.getElementById("tracks");

let activated = false;
let dragging = false;

/* Scroll → animación */
window.addEventListener("scroll", () => {
    let sectionTop = document.getElementById("section").offsetTop;
    let scroll = window.scrollY + window.innerHeight;

    if (scroll > sectionTop + 100 && !activated) {
        cd.classList.add("salir");
        cd.style.cursor = "grab";
        activated = true;
    }
});

/* Agarrar */
cd.onmousedown = () => {
    if (!activated) return;
    dragging = true;
};

/* Mover */
document.onmousemove = (e) => {
    if (dragging) {
        cd.style.left = e.pageX + "px";
        cd.style.top = e.pageY + "px";
    }
};

/* Soltar */
document.onmouseup = () => {
    if (!dragging) return;
    dragging = false;

    let rect = player.getBoundingClientRect();
    let cdRect = cd.getBoundingClientRect();

    if (
        cdRect.left < rect.right &&
        cdRect.right > rect.left &&
        cdRect.top < rect.bottom &&
        cdRect.bottom > rect.top
    ) {
        player.innerHTML = "CD INSERTED";
        tracks.style.display = "block";

        // Centrar CD dentro del player
        cd.style.left = rect.left + rect.width / 2 - 70 + "px";
        cd.style.top = rect.top + rect.height / 2 - 70 + "px";
    }
};

/* Play */
function play(link) {
    window.open(link, "_blank");
}