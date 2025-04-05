document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Store in localStorage (for demo purposes only - not secure)
    localStorage.setItem('demo_username', username);
    localStorage.setItem('demo_password', password);
    
    // Redirect to home page
    window.location.href = 'home.html';
});