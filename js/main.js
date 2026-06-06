document.querySelectorAll(".people button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".people button").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});