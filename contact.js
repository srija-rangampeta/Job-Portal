document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();
      const resume = document.getElementById("contact-resume").files[0];
  
      // Basic validation
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Optionally show success and clear
      alert("Thank you! Your message has been sent.");
  
      contactForm.reset();
    });
  });
  
