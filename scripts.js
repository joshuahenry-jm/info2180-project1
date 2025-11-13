window.onload = function () {
  const emailInput = document.getElementById("email");
  const messageDiv = document.querySelector(".message");
  const form = document.querySelector(".newsletter form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailPattern.test(email)) {
      messageDiv.textContent = "Please enter a valid email address.";
    } else {
      messageDiv.textContent = `Thank you! Your email address "${email}" has been added to our mailing list!`;
      form.reset();
    }
  });
};
