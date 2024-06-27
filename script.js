"use strict";
let bookID = 0;
const myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let report = `${title} by ${author}, ${pages} pages, `;
        let status = read ? "read." : "not yet read.";
        return report + status;
    };
}
function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

addBookToLibrary(new Book("The Clerk's Tale", "Thomas Augst", 126, false));
addBookToLibrary(new Book("Winnie the Pooh", "A. A. Milne", 120, true));
addBookToLibrary(new Book("Dog's First Baby", "Natalie Nelson", 10, false));
addBookToLibrary(new Book("Tarrying with the Negative", "Slavoj Zizek", 253, false));
addBookToLibrary(new Book("The Clerk's Tale 2: Electric Boogaloo", "Tom August", 236, false));
addBookToLibrary(new Book("Dog's Second Baby", "Matalie Melson", 12, false));
addBookToLibrary(new Book("Quickly Moving On from the Negative", "Zlavoj Sisek", 129, true));

console.log(myLibrary[0].info());

const container = document.querySelector("main");

function populate() {
    myLibrary.forEach((book) => {generateBook(book)})
}

function generateBook(book) {
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    const newTitle = document.createElement("h2");
    newTitle.classList.add("title");
    newTitle.textContent = book.title;
    newBook.appendChild(newTitle);

    const newAuthor = document.createElement("h3");
    newAuthor.classList.add("author");
    newAuthor.textContent = book.author;
    newBook.appendChild(newAuthor);

    const newPageCount = document.createElement("p");
    newPageCount.classList.add("pages");
    newPageCount.textContent = String(book.pages);
    newBook.appendChild(newPageCount);

    const newRead = document.createElement("button");
    newRead.textContent = book.read ? newRead.classList.add("status","read") : newRead.classList.add("status","unread");
    newBook.appendChild(newRead);

    newRead.addEventListener("click", () => {
        const classes = newRead.classList;
        classes.toggle("read");
        classes.toggle("unread");
        book.read ? book.read = false : book.read = true;
    })

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        newBook.remove();
    })
    newBook.appendChild(deleteButton);


    if (container !== null) {
        container.appendChild(newBook);
    }
}

const addButton = document.querySelector("#add-button");
const cancelButton = document.querySelector("#cancel");
const dialog = document.querySelector("#book-dialog");

// Update button opens a modal dialog
addButton.addEventListener("click", () => {
  dialog.showModal();
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close();
});

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    const form = document.querySelector("#book-form");

    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(newBook); 
    generateBook(newBook);   
    form.reset();
})

populate();