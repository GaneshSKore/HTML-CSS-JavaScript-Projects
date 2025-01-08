document.addEventListener("DOMContentLoaded", () => {
  const editProfileButton = document.getElementById("editProfile");
  const saveProfileButton = document.getElementById("saveProfile");
  const profileForm = document.getElementById("profileForm");
  const inputs = profileForm.querySelectorAll("input");

  // Initially, disable input fields
  inputs.forEach(input => input.disabled = true);

  // Enable inputs for editing
  editProfileButton.addEventListener("click", () => {
    inputs.forEach(input => input.disabled = false);
    editProfileButton.classList.add("hidden");
    saveProfileButton.classList.remove("hidden");
  });

  // Save updated profile information
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    inputs.forEach(input => input.disabled = true);
    editProfileButton.classList.remove("hidden");
    saveProfileButton.classList.add("hidden");
    alert("Profile updated successfully!");
  });

  // Handle avatar editing
  const editAvatarButton = document.getElementById("editAvatar");
  editAvatarButton.addEventListener("click", () => {
    alert("Avatar editing functionality coming soon!");
  });
});
