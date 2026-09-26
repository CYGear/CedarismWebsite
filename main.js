const currentBookWindow = document.getElementById("bookContainer");

const homeButton = document.getElementById("homeButton");
const biosButton = document.getElementById("biosButton");

const book1Chapters = document.querySelector(".chapter-selector-book1");
const book1Buttons = document.querySelectorAll(".chapter-selector-book1 .chapterButton");

const book2Chapters = document.querySelector(".chapter-selector-book2");
const book2Buttons = document.querySelectorAll(".chapter-selector-book2 .chapterButton");

const book3Chapters = document.querySelector(".chapter-selector-book3");
const book3Buttons = document.querySelectorAll(".chapter-selector-book3 .chapterButton");

// ------------------------------------------
function hideAllButtons()
{
    document.querySelector(".books").classList.add("hidden");

    book1Chapters.classList.remove("show");
    book2Chapters.classList.remove("show");
    book3Chapters.classList.remove("show");
};
function hideChapters()
{
    book1Chapters.classList.remove("show");
    book2Chapters.classList.remove("show");
    book3Chapters.classList.remove("show");
}
function showBookButtons()
{
    document.querySelector(".books").classList.remove("hidden");
};
// ---------------------------------------------

// HOME CHECK
function homeChecker(button, page){
    button.addEventListener("click", () => 
    {
        if (page == "home")
        {
            currentBookWindow.src = `pages/${page}.html`;

            showBookButtons();
            hideChapters();
        }   
        else if (page == "bios")
        {
            currentBookWindow.src = `pages/${page}.html`;
            
            hideAllButtons();
        } 
    });
};

homeChecker(document.getElementById("homeButton"), "home");
homeChecker(document.getElementById("biosButton"), "bios");

// BOOK CHECK
function bookChecker(button, book){
    button.addEventListener("click", () => 
    {
        if (book == "bookOne")
        {
            currentBookWindow.src = `pages/${book}/ch1.html`;
            book1Chapters.classList.add("show");

            book2Chapters.classList.remove("show");
            book3Chapters.classList.remove("show");
        }   
        else if (book == "bookTwo")
        {
            currentBookWindow.src = `pages/${book}/ch1.html`;
            book2Chapters.classList.add("show");

            book1Chapters.classList.remove("show");
            book3Chapters.classList.remove("show"); 
        } 
        else if (book == "bookThree")
        {
            currentBookWindow.src = `pages/${book}/ch1.html`;
            book3Chapters.classList.add("show");

            book1Chapters.classList.remove("show");
            book2Chapters.classList.remove("show");
        } 
    });
};

bookChecker(document.getElementById("bookOne"), "bookOne");
bookChecker(document.getElementById("bookTwo"), "bookTwo");
bookChecker(document.getElementById("bookThree"), "bookThree");

// chapter selector
function chatperSelector(buttons, book){
    buttons.forEach((button) => 
    {
        button.addEventListener("click", () => 
        {
            const chNumber = button.id.split("-")[1];
            currentBookWindow.src = `pages/${book}/ch${chNumber}.html`;
        });
    });
};

chatperSelector(book1Buttons, "bookOne");
chatperSelector(book2Buttons, "bookTwo");
chatperSelector(book3Buttons, "bookThree");