
let phoneFailed;
let emailFailed;

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const contactForm = event.target;


    // Validate form data
    if (!validateContactForm(contactForm)) {
        displayError(contactForm, 'Invalid input');
        return;
    }

    // Extract form data
    const firstName = contactForm.elements['FirstName'].value;
    const lastName = contactForm.elements['Last Name'].value;
    const email = contactForm.elements['Email'].value;
    const phoneNumber = contactForm.elements['PhoneNumber'].value;
    const message = contactForm.elements['i5vyy-6'].value;

    // Send email using SMTPJS
    /*fetch('https://smtpjs.com/v3/smtp.js')
        .then(response => response.text())
        .then(code => {
            eval(code)

            Email.send({
                Host: "smtp.gmail.com",
                Username: "your-gmail-username@gmail.com",
                Password: "your-gmail-password",
                To: 'your-receiver-email@example.com',
                From: email,
                Subject: `New Message from ${firstName} ${lastName}`,
                Body: message,
            }).then(function (message) {
                alert("Mail sent successfully.");
            });
        });*/
});


// Function to validate email addresses
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
}

// Function to validate phone numbers
function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Function to validate the contact form
function validateContactForm(contactForm) {
    let isValid = true;

    // Perform validation checks here
    // For example, check if email is valid
    if (!isValidEmail(contactForm.elements['Email'].value)) {
        emailFailed = true
        isValid = false;
    }
    if (!isValidPhoneNumber(contactForm.elements['PhoneNumber'].value)) {
        phoneFailed = true;
        isValid = false;
    }

    // Check other fields as needed

    return isValid;
}

// Function to display error messages
async function displayError(contactForm, errorMessage) {
    // Display the error message to the user
    // For example, add an error message next to the invalid field
    if (emailFailed) {
        alertTrad("goodbye")
    }
    if (phoneFailed) {
        alertTrad("goodbye")
    }

}


function alertTrad(key) {
    const lang = document.getElementById('languageSelector').value;
    //alert("goodbye")
    console.log(lang)
    fetch(`../translations/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            alert(translations[key]);
        });
}






