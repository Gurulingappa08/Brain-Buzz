document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const guestBtn = document.getElementById("guestBtn");
  const usernameInput = document.getElementById("usernameInput");

  // Login with username
  loginBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    if (username) {
      localStorage.setItem("username", username);
      window.location.href = "Welcome_User.html";
    } else {
      alert("Please enter your username!");
    }
  });

  // Login as Guest
  guestBtn.addEventListener("click", function () {
    localStorage.setItem("username", "Guest");
    window.location.href = "Welcome_Guest.html";
  });
});
