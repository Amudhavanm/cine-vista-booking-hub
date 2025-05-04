
document.addEventListener('DOMContentLoaded', function() {
    // Handle seat selection
    const seats = document.querySelectorAll('.seat.available');
    const selectedCountElement = document.getElementById('selected-count');
    const totalPriceElement = document.getElementById('total-price');
    const ticketPriceElement = document.getElementById('ticket-price');
    const proceedToPaymentButton = document.getElementById('proceed-to-payment');
    
    let selectedSeats = [];
    const ticketPrice = 12; // Default ticket price
    
    if (ticketPriceElement) {
        ticketPriceElement.textContent = ticketPrice;
    }
    
    // Add click event to each available seat
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            // Toggle seat selection
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                this.classList.add('available');
                
                // Remove from selected seats array
                const index = selectedSeats.indexOf(this.dataset.seat);
                if (index > -1) {
                    selectedSeats.splice(index, 1);
                }
            } else {
                this.classList.remove('available');
                this.classList.add('selected');
                
                // Add to selected seats array
                selectedSeats.push(this.dataset.seat);
            }
            
            // Update selected count and total price
            if (selectedCountElement && totalPriceElement) {
                selectedCountElement.textContent = selectedSeats.length;
                totalPriceElement.textContent = selectedSeats.length * ticketPrice;
            }
        });
    });
    
    // Handle proceed to payment button
    if (proceedToPaymentButton) {
        proceedToPaymentButton.addEventListener('click', function() {
            if (selectedSeats.length === 0) {
                alert('Please select at least one seat to proceed.');
                return;
            }
            
            // In a real app, you would store the selected seats in localStorage or a database
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
            localStorage.setItem('ticketPrice', ticketPrice);
            localStorage.setItem('totalAmount', selectedSeats.length * ticketPrice);
            
            // Redirect to payment page
            window.location.href = 'payment.html';
        });
    }
    
    // Handle date and time selection
    const dateBtns = document.querySelectorAll('.date-btn');
    const timeBtns = document.querySelectorAll('.time-btn');
    
    dateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all date buttons
            dateBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    timeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all time buttons
            timeBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
});
