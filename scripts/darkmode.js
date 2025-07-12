// darkmode.js
const toggleButton = document.getElementById('darkModeToggle');

// Check for saved user preference and set the initial theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Attach event listener to the toggle button
toggleButton.addEventListener('click', toggleDarkMode);
