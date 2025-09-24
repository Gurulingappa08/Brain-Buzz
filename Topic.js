document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const topic = btn.textContent.trim();
      localStorage.setItem("selectedTopic", topic);

      // Redirect to your quiz page (Quiz.html)
      window.location.href = "Quiz.html";
    });
  });
});
