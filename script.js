document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();  // Reset the form fields
});

function adopt(petName) {
    alert(`Thank you for your interest in adopting ${petName}!`);
}
