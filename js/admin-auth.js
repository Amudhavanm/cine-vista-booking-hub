
document.addEventListener('DOMContentLoaded', function() {
    // Check if admin is logged in
    function checkAdminLogin() {
        const adminUser = localStorage.getItem('adminUser');
        
        // If on admin pages and not logged in, redirect to login
        if (!adminUser && window.location.href.includes('admin-dashboard') || 
            window.location.href.includes('admin-add-movie') ||
            window.location.href.includes('admin-edit-movie')) {
            window.location.href = 'admin-login.html';
        }
    }
    
    // Call the function when page loads
    checkAdminLogin();
    
    // Handle admin logout
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', function() {
            localStorage.removeItem('adminUser');
            window.location.href = 'admin-login.html';
        });
    }
    
    // Handle admin login form submission
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            
            // Check against predefined admin credentials
            if (email === 'admin@gmail.com' && password === 'admin@123') {
                const adminUser = { email: email };
                localStorage.setItem('adminUser', JSON.stringify(adminUser));
                window.location.href = 'admin-dashboard.html';
            } else {
                errorMessage.textContent = 'Invalid email or password';
            }
        });
    }
});
