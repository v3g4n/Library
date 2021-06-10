
let myLibrary = []

const booksDiv = document.getElementById('library');
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

displayBooks();

function addBookToLibrary (book) {
    myLibrary.push(book);
    display(book);
}

let book1 = new Book ('Catch-22','Joseph Heller', 500, true)
let book2 = new Book ('You are a Badass', 'Jen Sincero', 300, false)

addBookToLibrary(book1);
addBookToLibrary(book2)

// addBookButton.addEventListener('click', (e) => {
    
// })

submitBookFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newAuthorInput = document.getElementById('new-author');
    const author = newAuthorInput.value;
    const newTitleInput = document.getElementById('new-title');
    const title = newTitleInput.value;
    const newPagesInput = document.getElementById('new-pages');
    const pages = newPagesInput.value;
    const newIsReadInput = document.getElementById('new-read');
    const isRead = newIsReadInput.checked;
    const newBook = new Book(title, author, pages, isRead);
    document.querySelector('form').reset();

    addBookToLibrary(newBook);
})

// for (let book of myLibrary) {
//     const newTableRow = document.createElement('tr');
//     booksTable.appendChild(newTableRow);
//     const newTitle = document.createElement('td');
//     newTitle.innerHTML = book.title;
//     const newAuthor = document.createElement('td');
//     newAuthor.innerHTML = book.author;
//     const newPages = document.createElement('td');
//     newPages.innerHTML = book.pages;
//     const newIsRead = document.createElement('td');
//     newIsRead.innerHTML = book.isRead;

//     newTableRow.appendChild(newTitle);
//     newTableRow.appendChild(newAuthor);
//     newTableRow.appendChild(newPages);
//     newTableRow.appendChild(newIsRead);
// }

function display(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const bookTitle = document.createElement('h5');
    bookTitle.classList.add('card-title', 'book-title');
    bookTitle.innerHTML = book.title;
    cardBody.appendChild(bookTitle);
    const authorName = document.createElement('h6');
    authorName.classList.add('card-subtitle', 'mb-2', 'text-muted', 'author');
    authorName.innerHTML = book.author;
    cardBody.appendChild(authorName);
    const bookPages = document.createElement('p');
    bookPages.classList.add('card-text', 'pages');
    bookPages.innerHTML = `${book.pages} pages`;
    cardBody.appendChild(bookPages);
    const bookRead = document.createElement('p');
    bookRead.classList.add('card-text', 'is-read');
    bookRead.innerHTML = book.isRead ? 'read' : 'not read yet';
    cardBody.appendChild(bookRead);
    const removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-primary', 'remove-book');
    removeButton.innerHTML = 'remove';
    cardBody.appendChild(removeButton);
    card.appendChild(cardBody);

    booksDiv.appendChild(card);
}

function displayBooks () {

    for (let book of myLibrary) {
        // const card = document.createElement('div');
        // card.classList.add('card');
        // const cardBody = document.createElement('div');
        // cardBody.classList.add('card-body');
        // const bookTitle = document.createElement('h5');
        // bookTitle.classList.add('card-title', 'book-title');
        // bookTitle.innerHTML = book.title;
        // cardBody.appendChild(bookTitle);
        // const authorName = document.createElement('h6');
        // authorName.classList.add('card-subtitle', 'mb-2', 'text-muted', 'author');
        // authorName.innerHTML = book.author;
        // cardBody.appendChild(authorName);
        // const bookPages = document.createElement('p');
        // bookPages.classList.add('card-text', 'pages');
        // bookPages.innerHTML = `${book.pages} pages`;
        // cardBody.appendChild(bookPages);
        // const bookRead = document.createElement('p');
        // bookRead.classList.add('card-text', 'is-read');
        // bookRead.innerHTML = book.isRead ? 'read' : 'not read yet';
        // cardBody.appendChild(bookRead);
        // const removeButton = document.createElement('button');
        // removeButton.classList.add('btn', 'btn-primary', 'remove-book');
        // removeButton.innerHTML = 'remove';
        // cardBody.appendChild(removeButton);
        // card.appendChild(cardBody);

        // booksDiv.appendChild(card);
        display(book);
    }
}


