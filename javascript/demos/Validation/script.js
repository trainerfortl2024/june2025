document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerText = "";

    try {
        if (!name || !email || !password || !confirmPassword) {
            throw new Error('All fields are required.');
        }

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            throw new Error('Name should only contain letters and spaces.');
        }

        if (!email.includes('@') || !email.includes('.') || email.length < 5) {
            throw new Error('Invalid email format.');
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long.');
        }

        if (password !== confirmPassword) {
            throw new Error('Passwords do not match.');
        }

        errorMessage.style.color = "green";
        errorMessage.innerText = "Form submitted successfully!";
    } catch (error) {
        errorMessage.style.color = "red";
        errorMessage.innerText = error.message;
    }
});
