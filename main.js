const currentBookWindow = document.getElementById("bookContainer");

const book1 = document.querySelector(".chapter-selector-book1");

// books
const bookOneButton = document.getElementById("bookOne");
const bookTwoButton = document.getElementById("bookTwo");

bookOneButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookOne.html";
    book1.classList.add("show"); // chapter selector
});

bookTwoButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookTwo.html";
    currentBook = "bookTwo";
});