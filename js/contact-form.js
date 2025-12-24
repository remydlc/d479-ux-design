// Handle contact form submission
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    
    // Show the success message
    formMessage.style.display = 'block';
    
    // Hide the message after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        formMessage.style.display = 'none';
    }, 5000);
    
    // Clear the form fields
    contactForm.reset();
});
