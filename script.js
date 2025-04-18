window.onload = function() {
    // Initialize EmailJS
    emailjs.init("WhSUdePBl6MRdOkXZ"); 

    // Contact form submission handler
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        emailjs.send("service_8qpfw74", "template_19lzfkp", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }).then(
            function(response) {
                console.log('Success:', response);
                document.getElementById("response-message").innerText = "Message sent successfully!";
                document.getElementById("contact-form").reset();
            },
            function(error) {
                console.log('Error:', error);
                document.getElementById("response-message").innerText = "Failed to send message.";
            }
        );
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Initialize Bootstrap Carousel
    const carousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
        interval: 3000,  // Optional: Set the interval for automatic sliding
        ride: 'carousel' // Optional: Ensures the carousel auto-starts
    });
};

const bootstrapCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
    interval: 3000, // 3 seconds between slides (change this value as needed)
    ride: 'carousel' // Auto-starts the carousel
});
