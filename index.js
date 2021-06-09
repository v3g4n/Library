
let myLibrary = []

const addBookButton = document.getElementById("add-book");
const booksTable = document.getElementById("books-table");
const submitBookFormButton = document.getElementById("add-new-book");

function Book (title, author, pages, isRead=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
}

Book.prototype.info = function() {
    readString = 'not read yet';
    if (this.isRead) {
        readString = 'read';
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`
}

function addBookToLibrary (book) {
    myLibrary.push(book);
}

let book1 = new Book ('Catch-22','Joseph Heller', 500, true)
let book2 = new Book ('You are a Badass', 'Jen Sincero', 300, false)

addBookToLibrary(book1);
addBookToLibrary(book2)

addBookButton.addEventListener('click', (e) => {
    
})

submitBookFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    newAuthorInput = document.getElementById('new-author');
    author = newAuthorInput.value;
    newTitleInput = document.getElementById('new-title');
    title = newTitleInput.value;
    newPagesInput = document.getElementById('new-pages');
    pages = newPagesInput.value;
    newIsReadInput = document.getElementById('new-read');
    isRead = newIsReadInput.value;
    newBook = new Book(title, author, pages, isRead);
    document.querySelector('form').reset();

    addBookToLibrary(newBook);
})

for (let book of myLibrary) {
    const newTableRow = document.createElement('tr');
    booksTable.appendChild(newTableRow);
    const newTitle = document.createElement('td');
    newTitle.innerHTML = book.title;
    const newAuthor = document.createElement('td');
    newAuthor.innerHTML = book.author;
    const newPages = document.createElement('td');
    newPages.innerHTML = book.pages;
    const newIsRead = document.createElement('td');
    newIsRead.innerHTML = book.isRead;

    newTableRow.appendChild(newTitle);
    newTableRow.appendChild(newAuthor);
    newTableRow.appendChild(newPages);
    newTableRow.appendChild(newIsRead);

}


