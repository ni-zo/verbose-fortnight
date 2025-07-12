// Get a reference to the toggle button 
const toggleButton = document.querySelector("#darkmode-toggle");

// Add a click event listener to the toggle button 
toggleButton.addEventListener("click", () => { 
    // Toggle the "darkmode" class on the body element 
    document.body.classList.toggle("darkmode"); });