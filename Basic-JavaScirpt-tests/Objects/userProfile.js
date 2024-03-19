// Object - User Profile
const userProfile = {
  name: "",
  age: "",
  email: "",
};

// Function to update user profile
function updateUserProfile(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get user input values
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;
  const email = document.getElementById("emailInput").value;

  // Update userProfile object
  userProfile.name = name;
  userProfile.age = age;
  userProfile.email = email;

  // Display user profile data
  document.getElementById("name").textContent = userProfile.name;
  document.getElementById("age").textContent = userProfile.age;
  document.getElementById("email").textContent = userProfile.email;
}

// Event listener for form submission
document
  .getElementById("userProfileForm")
  .addEventListener("submit", updateUserProfile);
