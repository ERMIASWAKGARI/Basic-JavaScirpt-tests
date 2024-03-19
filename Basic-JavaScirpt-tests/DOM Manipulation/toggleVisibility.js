document.getElementById("toggleButton").addEventListener("click", function () {
  const contentDiv = document.getElementById("content");
  if (contentDiv.style.display === "none") {
    contentDiv.style.display = "block";
  } else {
    contentDiv.style.display = "none";
  }
});
