
let myLibrary = []

const booksDiv = document.getElementById('library');
const addBookButton = document.getElementById('add-book');
const submitBookFormButton = document.getElementById('add-new-book');

class Book {
    constructor(title, author, pages, isRead=false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        Book.prototype.count = Book.prototype.count ? Book.prototype.count + 1 : 1;
        this.id = Book.prototype.count;
    }
    
    toggleRead() {
        this.isRead ? this.isRead = false : this.isRead = true;
    }
}

// Book.prototype.info = function() {
//     readString = 'not read yet';
//     if (this.isRead) {
//         readString = 'read';
//     }
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`
// }

displayBooks();

function addBookToLibrary (book) {
    myLibrary.push(book);
    display(book);
}

let book1 = new Book ('Catch-22','Joseph Heller', 500, true);
let book2 = new Book ('You are a Badass', 'Jen Sincero', 300, false);

addBookToLibrary(book1);
addBookToLibrary(book2);


booksDiv.addEventListener('click', (e) => {
    // Toggled read button?
    if (e.target.classList.contains('is-read')) {
        e.preventDefault;
        const readButton = e.target;
        console.log('read button clicked');
        // Find book ID
        const parentCard = readButton.parentNode.parentNode;
        const bookId = parentCard.getAttribute('book-id');
        console.log(bookId);
        const bookArray = myLibrary.filter(bk => bk.id === parseInt(bookId))
        console.log(bookArray);
        const currentBook = bookArray[0];
        console.log(currentBook);
        console.log(currentBook.id);
        if (readButton.innerHTML === 'read') {
            readButton.innerHTML = 'not read yet'
            currentBook.isRead = false;
        } else {
            readButton.innerHTML = 'read'
            currentBook.isRead = true;
        }
    // Clicked remove button?
    } else if (e.target.classList.contains('remove-book')) {
        e.preventDefault;
        const removeButton = e.target;
        console.log('remove button clicked');
        const parentCard = removeButton.parentNode.parentNode;
        const bookId = parentCard.getAttribute('book-id');
        const book = myLibrary.filter((bk) => bk.id === parseInt(bookId))[0];
        parentCard.remove();
        myLibrary = myLibrary.filter((bk) => bk.id !== parseInt(bookId));
    } else {
        return;
    }
})

// When submit button is clicked to add new book
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

// Create a new card to display the book info and add it to the parent div
function display(book) {
    const card = document.createElement('div');
    card.setAttribute('book-id', book.id);
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
    const bookRead = document.createElement('button');
    bookRead.classList.add('btn', 'btn-primary', 'is-read');
    bookRead.innerHTML = book.isRead ? 'read' : 'not read yet';
    cardBody.appendChild(bookRead);
    const removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-primary', 'remove-book');
    removeButton.innerHTML = 'remove';
    cardBody.appendChild(removeButton);
    card.appendChild(cardBody);
    booksDiv.appendChild(card);
}

// Loop through all books in the myLibrary array and display them
function displayBooks () {
    for (let book of myLibrary) {
        display(book);
    }
}


