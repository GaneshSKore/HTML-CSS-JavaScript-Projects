document.addEventListener("DOMContentLoaded", () => {
  const settingsForm = document.getElementById("settingsForm");
  const themeSelect = document.getElementById("theme");

  // Load saved settings from localStorage
  function loadSettings() {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const theme = localStorage.getItem("theme");
    const notifications = localStorage.getItem("notifications");

    if (username) document.getElementById("username").value = username;
    if (email) document.getElementById("email").value = email;
    if (theme) themeSelect.value = theme;
    document.getElementById("notifications").checked = notifications === "true";
  }

  // Save settings to localStorage
  function saveSettings(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const theme = themeSelect.value;
    const notifications = document.getElementById("notifications").checked;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("theme", theme);
    localStorage.setItem("notifications", notifications);

    alert("Settings saved successfully!");
  }

  // Reset form and clear localStorage
  document.getElementById("resetButton").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset settings?")) {
      localStorage.clear();
      settingsForm.reset();
      alert("Settings have been reset.");
    }
  });

  settingsForm.addEventListener("submit", saveSettings);
  loadSettings();
});
