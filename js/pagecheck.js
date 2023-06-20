// script.js
var currentPage = window.location.pathname;  // Get the current page URL

// Add event listener to the buttons
document.getElementById('previousPage').addEventListener('click', function(event) {
  if (currentPage === '/index.html') {
    event.preventDefault();  // Prevent navigation if already on the same page
  }
});

document.getElementById('nextPage').addEventListener('click', function(event) {
  if (currentPage === '/page2.html') {
    event.preventDefault();  // Prevent navigation if already on the same page
  }
});
