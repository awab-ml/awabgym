document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset form after submission
});

// Night Mode Toggle
document.getElementById('nightModeToggle').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.toggle('night-mode');
    const isNightMode = document.body.classList.contains('night-mode');
    this.textContent = isNightMode ? 'Day Mode' : 'Night Mode'; // Toggle button text
});
