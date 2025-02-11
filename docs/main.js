
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            // Clear previous error messages
            const errorMessageDiv = document.getElementById('error-message');
            errorMessageDiv.textContent = '';
            const inputs = document.querySelectorAll('input, textarea');
            inputs.forEach(input => input.classList.remove('error'));

            let isValid = true;

            // Validate name
            const name = document.getElementById('name').value.trim();
            if (name === '') {
                isValid = false;
                document.getElementById('name').classList.add('error');
                errorMessageDiv.textContent += 'Name is required. ';
            }

            // Validate email
            const email = document.getElementById('email').value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '' || !emailPattern.test(email)) {
                isValid = false;
                document.getElementById('email').classList.add('error');
                errorMessageDiv.textContent += 'Valid email is required. ';
            }

            // Validate message
            const message = document.getElementById('message').value.trim();
            if (message === '') {
                isValid = false;
                document.getElementById('message').classList.add('error');
                errorMessageDiv.textContent += 'Message is required. ';
            }

            // If the form is not valid, prevent submission
            if (!isValid) {
                event.preventDefault();
            }
        });
