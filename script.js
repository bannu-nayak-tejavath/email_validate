function validateEmail() {
    var email = document.getElementById('email').value;
    var result = document.getElementById('result');
    var isValid = false;

    // Regular expression for validating an email address
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is not empty and matches the pattern
    if (email.trim() === "") {
        result.innerText = "Please enter an email address.";
        result.className = "error";
    } else if (email.match(emailPattern)) {
        result.innerText = "Valid email address";
        result.className = "valid";
        isValid = true;
    } else {
        result.innerText = "Invalid email address";
        result.className = "error";
    }

    // Additional check for known disposable email services
    if (isValid) {
        var disposableDomains = ['mailinator.com', 'guerrillamail.com', 'example.com']; // Add more disposable domains here
        var domain = email.split('@')[1];
        if (disposableDomains.includes(domain)) {
            result.innerText += " (Warning: Disposable email address)";
            result.className = "error";
        }
    }
}
