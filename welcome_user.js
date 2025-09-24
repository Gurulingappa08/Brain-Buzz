document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username") || "User";
  const welcomeText = document.getElementById("welcomeText");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // Show username
  if (welcomeText) {
    welcomeText.textContent = `Welcome, ${username}`;
  }

  // Start Quiz → Topic page
  if (startQuizBtn) {
    startQuizBtn.addEventListener("click", function () {
      window.location.href = "Topic.html";
    });
  }

  // Logout → back to Login page
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("username");
      window.location.href = "index.html";
    });
  }
});
