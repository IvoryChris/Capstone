window.onload = function() {
    // Initialize EmailJS
    emailjs.init("WhSUdePBl6MRdOkXZ"); // Replace with your EmailJS Public Key

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
    });}
