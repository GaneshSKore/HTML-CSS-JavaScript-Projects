document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  // Handle form submission
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation (checking if fields are empty)
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Show success message
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
      contactForm.reset(); // Clear the form
    }, 3000); // Hide success message after 3 seconds

    // Here you could add code to send the form data to a server via AJAX, etc.
  });
});
