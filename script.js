document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (!name || !email.includes("@") || !message) {
        alert("Please fill out all fields correctly.");
        e.preventDefault();
      }
    });
  }
});
