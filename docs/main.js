<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="styles.css"> <!-- Linking the same CSS file -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.8.1.min.css"/>
    <style>
        .error {
            border: 2px solid red;
        }
        .error-message {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <header>
        <h1><b>Contact Us</b></h1>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>

    <section>
        <h2>Send us a message!</h2>

        <form id="contactForm" action="mailto:90004643@saultcollege.ca" method="POST" enctype="text/plain">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>

            <button type="submit">Send Message</button>
            <div id="error-message" class="error-message"></div>
        </form>
    </section>

    <footer>
        <p>&copy; 2025 Carr' Computer Consulting</p>
    </footer>

    <script>
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
    </script>
</body>
</html>