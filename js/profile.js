
document.addEventListener('DOMContentLoaded', function() {
    // Load user details
    function loadUserDetails() {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        
        if (user.username) {
            document.getElementById('username').value = user.username;
        }
        
        if (user.email) {
            document.getElementById('email').value = user.email;
        }
        
        if (user.phone) {
            document.getElementById('phone').value = user.phone;
        }
    }
    
    // Call this function when page loads
    loadUserDetails();
    
    // Handle profile form submission
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Update user object
            const user = {
                username: username,
                email: email,
                phone: phone
            };
            
            // Save to localStorage
            localStorage.setItem('user', JSON.stringify(user));
            
            // Show success message
            alert('Profile updated successfully!');
        });
    }
    
    // Handle password form submission
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const errorElement = document.getElementById('password-error');
            
            // Check if new passwords match
            if (newPassword !== confirmPassword) {
                errorElement.textContent = 'New passwords do not match';
                return;
            }
            
            // In a real app, you would verify current password and update it
            
            // Show success message
            alert('Password updated successfully!');
            
            // Reset form
            this.reset();
            errorElement.textContent = '';
        });
    }
});
