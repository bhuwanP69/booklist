// Retrieve existing books from Local Storage or initialize an empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to display the books
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  // Loop through each book and create a list item with remove button
  books.forEach((book, index) => {
    const listItem = document.createElement('div');
    listItem.classList.add('flex', 'justify-between', 'mb-2','bg-orange');

    const bookName = document.createElement('div');
    bookName.textContent = book;
    bookName.classList.add('bg-orange-600')
    listItem.appendChild(bookName);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('py-1', 'px-2', 'bg-red-500', 'text-white', 'font-semibold');
    removeBtn.addEventListener('click', () => {
      // Remove the book from the array
      books.splice(index, 1);
      // Update the Local Storage with the updated array
      localStorage.setItem('books', JSON.stringify(books));
      // Display the updated list of books
      displayBooks();
    });
    listItem.appendChild(removeBtn);

    bookList.appendChild(listItem);
  });
}

// Handle the form submission
const addBookForm = document.getElementById('addBookForm');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookNameInput = document.getElementById('bookName');
  const bookName = bookNameInput.value.trim();

  if (bookName !== '') {
    // Add the book to the array
    books.push(bookName);
    // Update the Local Storage with the updated array
    localStorage.setItem('books', JSON.stringify(books));
    // Clear the input field
    bookNameInput.value = '';
    // Display the updated list of books
    displayBooks();
  }
});

// Display the initial list of books
displayBooks();
// Handle remove book button clicks
document.getElementById('bookList').addEventListener('click', (e) => {
    if (e.target.matches('button.remove-btn')) {
      const index = e.target.dataset.index;
      // Remove the book from the array
      books.splice(index, 1);
      // Update the Local Storage with the updated array
      localStorage.setItem('books', JSON.stringify(books));
      // Display the updated list of books
      displayBooks();
    }
  });
  