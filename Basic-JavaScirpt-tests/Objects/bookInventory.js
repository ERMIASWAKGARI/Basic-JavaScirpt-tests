// Object - Book Inventory
const bookInventory = [];

// Function to add book to inventory
function addBook(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get user input values
  const title = document.getElementById("titleInput").value;
  const author = document.getElementById("authorInput").value;
  const pages = parseInt(document.getElementById("pagesInput").value);
  const available = document.getElementById("availableInput").value === "true";

  // Create book object
  const book = {
    title: title,
    author: author,
    pages: pages,
    available: available,
  };

  // Add book to inventory
  bookInventory.push(book);

  // Display book inventory
  displayBookInventory();
}

// Function to display book inventory
function displayBookInventory() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = ""; // Clear previous list

  // Loop through book inventory and create list items
  bookInventory.forEach(function (book) {
    const listItem = document.createElement("li");
    listItem.textContent =
      "Title: " +
      book.title +
      ", Author: " +
      book.author +
      ", Pages: " +
      book.pages +
      ", Available: " +
      (book.available ? "Yes" : "No");
    bookList.appendChild(listItem);
  });
}

// Event listener for form submission
document.getElementById("bookForm").addEventListener("submit", addBook);
