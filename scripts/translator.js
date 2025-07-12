const languageSelector = document.getElementById('languageSelector');

// Load translations for the selected language
function loadTranslations(lang) {
    //fetch(`../translations/${lang}.json`)
    fetch(`../i18n/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            translatePage(translations);
        });
}

// Translate the page using loaded translations
function translatePage(translations) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[key];
    });
}

// Event listener for language selection
languageSelector.addEventListener('change', function() {
    const lang = this.value;
    loadTranslations(lang);
});

// Initial load of translations based on the default language
loadTranslations(languageSelector.value);
