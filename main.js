const currentBookWindow = document.getElementById("bookContainer");

const book1 = document.querySelector(".chapter-selector-book1");
const book1Buttons = document.querySelectorAll(".chapter-selector-book1 .chapterButton");

// books
const bookOneButton = document.getElementById("bookOne");
const bookTwoButton = document.getElementById("bookTwo");

bookOneButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookOne/ch1.html";
    book1.classList.add("show"); // chapter selector
});

bookTwoButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookTwo/ch1.html";
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