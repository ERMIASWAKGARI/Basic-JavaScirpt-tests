document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the empty div element
  const dynamicContentDiv = document.getElementById("dynamicContent");

  // Messages to be added
  const messages = [
    "Hello, welcome to our website!",
    "Thanks for visiting us today.",
    "Feel free to explore our content.",
    "We hope you find what you're looking for.",
    "Don't hesitate to contact us if you need assistance.",
  ];

  // Create and append paragraph elements with the messages
  messages.forEach(function (message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    dynamicContentDiv.appendChild(paragraph);
  });
});
