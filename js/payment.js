
document.addEventListener('DOMContentLoaded', function() {
    // Load booking details from localStorage
    function loadBookingDetails() {
        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
        const ticketPrice = localStorage.getItem('ticketPrice') || 12;
        const totalAmount = localStorage.getItem('totalAmount') || 0;
        
        // Update order summary
        document.getElementById('selected-seats').textContent = selectedSeats.join(', ');
        document.getElementById('ticket-count').textContent = selectedSeats.length;
        document.getElementById('ticket-price').textContent = '$' + ticketPrice;
        document.getElementById('subtotal').textContent = '$' + totalAmount;
        
        const convenienceFee = 2; // Fixed convenience fee
        document.getElementById('convenience-fee').textContent = '$' + convenienceFee.toFixed(2);
        
        const grandTotal = parseFloat(totalAmount) + convenienceFee;
        document.getElementById('total-amount').textContent = '$' + grandTotal.toFixed(2);
        
        // Update button text
        document.querySelector('.pay-btn').textContent = 'Pay $' + grandTotal.toFixed(2);
    }
    
    // Call this function when page loads
    loadBookingDetails();
    
    // Handle payment form submission
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would process payment through a payment gateway
            
            // Show e-ticket after successful payment
            document.getElementById('e-ticket').style.display = 'flex';
            
            // Update e-ticket details
            const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
            document.getElementById('e-ticket-seats').textContent = selectedSeats.join(', ');
            document.getElementById('e-ticket-count').textContent = selectedSeats.length;
            
            // Generate random booking ID
            const bookingId = 'CIN' + Math.floor(Math.random() * 900000000 + 100000000);
            document.getElementById('booking-id').textContent = bookingId;
        });
    }
    
    // Handle payment method radio buttons
    const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
    if (paymentMethodRadios) {
        paymentMethodRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                // In a real app, you would show different payment forms based on selection
                console.log('Payment method changed to:', this.value);
            });
        });
    }
});
