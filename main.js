const currentBookWindow = document.getElementById("bookContainer");

// books
const bookOneButton = document.getElementById("bookOne");
const bookTwoButton = document.getElementById("bookTwo");

bookOneButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookOne.html";
});

bookTwoButton.addEventListener('click', () => {
    currentBookWindow.src = "pages/bookTwo.html";
});