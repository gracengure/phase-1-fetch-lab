function fetchBooks() {
  
  return fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      
      return response.json();
    })
    .then(function(data) {
     
      renderBooks(data);
    })
    .catch(function(error) {
     
      console.error("Error fetching data: ", error);
    });
}

function renderBooks(books) {
  
  const bookList = document.getElementById("book-list");

  
  books.forEach(function(book) {
    const listItem = document.createElement("li");
    listItem.textContent = book.name; 
    bookList.appendChild(listItem);
  });
}


document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});