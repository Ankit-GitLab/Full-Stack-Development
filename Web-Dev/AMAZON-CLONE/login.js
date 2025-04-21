document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); 

    // user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // correct username & password
    const validEmail = "msd7ravis@gmail.com";
    const validPassword = "ravi@123";

    // Check information
    if (email == validEmail && password == validPassword) {
        // show success
        document.getElementById('message').innerText = "Login successful!";

    } else {
        // Show error 
        document.getElementById('message').innerText = "Invalid email or password.";
    }
};
