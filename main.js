const currentBookWindow = document.getElementById("bookContainer");

const book1 = document.querySelector(".chapter-selector-book1");
const book1Buttons = document.querySelectorAll(".chapter-selector-book1 .chapterButton");

const book2 = document.querySelector(".chapter-selector-book2");
const book2Buttons = document.querySelectorAll(".chapter-selector-book2 .chapterButton");

// books
const bookOneButton = document.getElementById("bookOne");
const bookTwoButton = document.getElementById("bookTwo");

bookOneButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookOne/ch1.html";
    book1.classList.add("show"); // show book1 chapters
    book2.classList.remove("show"); // hide book2 chapters
});

bookTwoButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookTwo/ch1.html";
    book2.classList.add("show"); // show book2 chapters
    book1.classList.remove("show"); // hide book1 chapters
});

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