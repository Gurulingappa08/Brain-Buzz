document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username") || "Guest";
  const welcomeText = document.getElementById("welcomeText");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (welcomeText) {
    welcomeText.textContent = `Welcome, ${username}`;
  }

  if (startQuizBtn) {
    startQuizBtn.addEventListener("click", function () {
      window.location.href = "Topic.html";
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("username");
      window.location.href = "Login.html";
    });
  }
});
