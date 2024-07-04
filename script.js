// script.js
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("Clicked on: " + link.textContent);
        });
    });
});
