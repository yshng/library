"use strict";
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
addBookToLibrary(new Book("Winnie the Pooh", "A. A. Milne", 120, false));
addBookToLibrary(new Book("Dog's First Baby", "Unknown Author", 10, false));
addBookToLibrary(new Book("Tarrying with the Negative", "Slavoj Zizek", 253, false));
addBookToLibrary(new Book("The Clerk's Tale 2: Electric Boogaloo", "Thomas Augst", 236, false));
addBookToLibrary(new Book("Dog's Second Baby", "Unknown Author", 12, false));
addBookToLibrary(new Book("Tarrying with the Negative (Again)", "Slavoj Zizek", 329, false));

console.log(myLibrary[0].info());

const container = document.querySelector("main");

function populate() {

    myLibrary.forEach((book) => {

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

    if (container !== null) {
        container.appendChild(newBook);
    }

    // add something here to turn an icon on and off for having read book

    })
}

populate();
