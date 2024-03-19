document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var successMessage = document.getElementById("successMessage");

    // Validate username field
    if (usernameInput.value.trim() === "") {
      usernameError.style.display = "block";
      event.preventDefault(); // Prevent form submission
    } else {
      usernameError.style.display = "none";
    }

    // Validate password field
    if (passwordInput.value.trim() === "") {
      passwordError.style.display = "block";
      event.preventDefault(); // Prevent form submission
    } else {
      passwordError.style.display = "none";
    }

    // If both fields are filled, display success message
    if (
      usernameInput.value.trim() !== "" &&
      passwordInput.value.trim() !== ""
    ) {
      successMessage.style.display = "block";
      event.preventDefault(); // Prevent form submission
    } else {
      successMessage.style.display = "none";
    }
  });
