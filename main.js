const currentBookWindow = document.getElementById("bookContainer");

const homeButton = document.getElementById("homeButton");
const biosButton = document.getElementById("biosButton");
const worshipButton = document.getElementById("worshipButton");

const book1 = document.querySelector(".chapter-selector-book1");
const book1Buttons = document.querySelectorAll(".chapter-selector-book1 .chapterButton");

const book2 = document.querySelector(".chapter-selector-book2");
const book2Buttons = document.querySelectorAll(".chapter-selector-book2 .chapterButton");

const book3 = document.querySelector(".chapter-selector-book3");
const book3Buttons = document.querySelectorAll(".chapter-selector-book3 .chapterButton");

// books
const bookOneButton = document.getElementById("bookOne");
const bookTwoButton = document.getElementById("bookTwo");
const bookThreeButton = document.getElementById("bookThree");

// HOME CHECK
homeButton.addEventListener("click", () => {
    currentBookWindow.src = "pages/cedarismDefinition.html";

    book1.classList.remove("show");
    book2.classList.remove("show");
    book3.classList.remove("show");
});
biosButton.addEventListener("click", () => {
    currentBookWindow.src = "pages/bios.html";

    book1.classList.remove("show");
    book2.classList.remove("show");
    book3.classList.remove("show");
});
worshipButton.addEventListener("click", () => {
    currentBookWindow.src = "pages/worship.html";

    book1.classList.remove("show");
    book2.classList.remove("show");
    book3.classList.remove("show");
});

// BOOK CHECK
bookOneButton.addEventListener("click", () => {
    currentBookWindow.src = "pages/bookOne/ch1.html";
    book1.classList.add("show"); // show book1 chapters

    book2.classList.remove("show"); // hide book2 chapters
    book3.classList.remove("show"); // yk already
});
bookTwoButton.addEventListener("click", () => {
    currentBookWindow.src = "pages/bookTwo/ch1.html";
    book2.classList.add("show"); // show book2 chapters

    book1.classList.remove("show"); // hide book1 chapters
    book3.classList.remove("show");
});
bookThreeButton.addEventListener("click", () => {
    currentBookWindow.src = "pages/bookThree/ch1.html";
    book3.classList.add("show");

    book1.classList.remove("show");
    book2.classList.remove("show");
})

// chapter selector
book1Buttons.forEach((button) => 
{
    button.addEventListener("click", () => 
    {
        const chNumber = button.id.split("-")[1]; // gets number from selector-1-b1 or similar
        currentBookWindow.src = `pages/bookOne/ch${chNumber}.html`;
    });
});
book2Buttons.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        const chNumber = button.id.split("-")[1];
        currentBookWindow.src = `pages/bookTwo/ch${chNumber}.html`;
    });
});
book3Buttons.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        const chNumber = button.id.split("-")[1];
        currentBookWindow.src = `pages/bookThree/ch${chNumber}.html`;
    });
});