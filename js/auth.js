
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    function checkLogin() {
        const user = localStorage.getItem('user');
        const loginLink = document.getElementById('loginLink');
        const signupLink = document.getElementById('signupLink');
        const profileLink = document.getElementById('profileLink');
        
        if (loginLink && signupLink && profileLink) {
            if (user) {
                // User is logged in
                loginLink.style.display = 'none';
                signupLink.style.display = 'none';
                profileLink.style.display = 'inline-block';
            } else {
                // User is not logged in
                loginLink.style.display = 'inline-block';
                signupLink.style.display = 'inline-block';
                profileLink.style.display = 'none';
            }
        }
    }
    
    // Call the function when page loads
    checkLogin();
    
    // Handle logout click
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('user');
            window.location.href = '../index.html';
        });
    }
    
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            // Demo login - in a real app, this would be an API call
            if (email && password) {
                // For demo, just save user to localStorage
                const user = {
                    email: email,
                    username: email.split('@')[0]
                };
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../index.html';
            } else {
                errorMessage.textContent = 'Please enter both email and password';
            }
        });
    }
    
    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const errorMessage = document.getElementById('error-message');
            
            // Validation
            if (password !== confirmPassword) {
                errorMessage.textContent = "Passwords don't match";
                return;
            }
            
            // Demo signup - in a real app, this would be an API call
            if (username && email && phone && password) {
                // For demo, just save user to localStorage
                const user = {
                    username: username,
                    email: email,
                    phone: phone
                };
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../index.html';
            } else {
                errorMessage.textContent = 'Please fill in all fields';
            }
        });
    }
});
