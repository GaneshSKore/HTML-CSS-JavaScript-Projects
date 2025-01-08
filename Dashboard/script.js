// JavaScript Code for Dashboard Functionality

document.addEventListener("DOMContentLoaded", () => {
  // Toggle active state for navigation items
  const navItems = document.querySelectorAll("nav ul li a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Toggle active state for course tabs
  const courseTabs = document.querySelectorAll(".course-box ul li");
  const courses = document.querySelectorAll(".course .box");
  
  courseTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      courseTabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      // Show or hide courses based on the active tab (simplified logic)
      courses.forEach((course, courseIndex) => {
        course.style.display = (index === 0 && courseIndex < 4) ? "block" : "none";
      });
    });
  });

  // Handle button click events
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(`You clicked on: ${button.parentElement.querySelector("h3").textContent}`);
    });
  });

  // Default: Show all courses for the "In progress" tab
  courses.forEach((course, courseIndex) => {
    course.style.display = courseIndex < 4 ? "block" : "none";
  });
});
// log out from

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.querySelector(".logout");

  // Handle logout click
  logoutButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (confirm("Are you sure you want to log out?")) {
      // Perform logout action
      alert("You have successfully logged out!");
      window.location.href = "login.html"; // Redirect to the login page
    }
  });
});
