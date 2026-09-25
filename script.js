// Handle form submission
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = this.querySelector('input[name="email"]').value;
        const name = this.querySelector('input[name="name"]').value;

        // Optional: Send to email service (Mailchimp, Convertkit, etc.)
        // Replace with your actual endpoint
        try {
            // Example: Send to your backend or email service
            console.log('Email:', email);
            console.log('Name:', name);
            
            // Show success message
            alert('Thanks for joining the relationship! Check your email for updates.');
            this.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
    });
}