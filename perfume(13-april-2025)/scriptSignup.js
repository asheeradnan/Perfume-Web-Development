// Signup form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const fullName = document.getElementById('full-name').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    // Validate input
    if (!email || !fullName || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // This is where you would normally send data to server
    console.log('Signup attempt:', email, fullName);
    
    // For demo purposes, redirect to homepage after "signup"
    alert('Account created successfully!');
    window.location.href = '../index.html';
});
