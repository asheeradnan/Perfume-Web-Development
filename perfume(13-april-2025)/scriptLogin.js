// Login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validate input
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // This is where you would normally send data to server
    console.log('Login attempt:', username);
    
    // For demo purposes, redirect to homepage after "login"
    alert('Login successful!');
    window.location.href = '../index.html';
});

// Register form submission
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    // This is where you would normally send data to server
    console.log('Registration with email:', email);
    
    // For demo purposes, show success message
    alert('Registration successful! Check your email for instructions.');
    document.getElementById('email').value = '';
});

// Check if URL has a hash for direct navigation to registration
window.addEventListener('load', function() {
    if (window.location.hash === '#register') {
        document.getElementById('register').scrollIntoView();
    }
});
