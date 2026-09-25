const currentBookWindow = document.getElementById("bookContainer");

// books
const bookOneButton = document.getElementById("bookOne");
const bookTwoButton = document.getElementById("bookTwo");

bookOneButton.addEventListener('click', () => {
    currentBookWindow.src = "books/bookOne.html";
});

bookTwoButton.addEventListener('click', () => {
    currentBookWindow.src = "books/bookTwo.html";
});