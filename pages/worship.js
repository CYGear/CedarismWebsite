const crestClick = document.querySelector(".crestClick");
const worshipCounter = document.querySelector(".worship-counter");

let worships = 0;
let isAnimating = false;

crestClick.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    crestClick.classList.add("crestClick-clicked");

    worships += 1;
    worshipCounter.textContent = `Worshiped ${worships} Times`;

    setTimeout(() => {
        crestClick.classList.remove("crestClick-clicked");
        isAnimating = false;
    }, 400);
});