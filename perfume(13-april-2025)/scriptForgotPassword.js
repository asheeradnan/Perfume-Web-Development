// Forgot password form submission
document.getElementById('forgot-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const statusMessage = document.getElementById('status-message');
    
    // Clear previous status message
    statusMessage.className = 'status-message';
    statusMessage.style.display = 'none';
    statusMessage.textContent = '';
    
    // Validate input
    if (!email) {
        showStatusMessage('Please enter your email address', 'error');
        return;
    }
    
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showStatusMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // This is where you would normally send data to server
    console.log('Password reset requested for:', email);
    
    // For demo purposes, show success message
    showStatusMessage('If your email exists in our system, you will receive a password reset link shortly.', 'success');
    
    // Clear the form
    document.getElementById('email').value = '';
    
    // Optional: You could redirect to a confirmation page or back to login after a delay
    // setTimeout(() => {
    //     window.location.href = 'login.html';
    // }, 3000);
});

// Function to show status messages
function showStatusMessage(message, type) {
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = message;
    statusMessage.className = 'status-message ' + type;
    statusMessage.style.display = 'block';
}
