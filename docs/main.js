document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Clear previous error messages
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = '';
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.classList.remove('error'));

    let isValid = true;

    function addError(input, message) {
        isValid = false;
        input.classList.add('error');
        errorMessageDiv.textContent += message + ' ';
    }

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        addError(document.getElementById('name'), 'Name is required.');
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        addError(document.getElementById('email'), 'Valid email is required.');
    }

    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        addError(document.getElementById('message'), 'Message is required.');
    }

    // If the form is not valid, prevent submission
    if (!isValid) {
        event.preventDefault();
    }
});