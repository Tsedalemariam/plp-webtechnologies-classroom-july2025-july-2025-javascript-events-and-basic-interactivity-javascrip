// ==============================
// Light / Dark Mode
// ==============================
let toggleButton = document.getElementById("toggleMode");

// When button is clicked, add/remove "dark-mode" from body
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==============================
// Live Greeting Feature
// ==============================
let nameInput = document.getElementById("name");
let greeting = document.getElementById("greetingMessage");

// When typing in the name field, show greeting
nameInput.addEventListener("input", () => {
  let currentName = nameInput.value.trim();

  if (currentName.length > 0) {
    greeting.textContent = "Hello, " + currentName + "! 👋";
  } else {
    greeting.textContent = "";
  }
});

// ==============================
// Form Validation
// ==============================
let form = document.getElementById("contactForm");
let message = document.getElementById("formMessage");

// When form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Rule 1: Name must be at least 3 characters
  if (name.length < 3) {
    message.textContent = "Name must be at least 3 characters.";
    message.style.color = "red";
    return;
  }

  // Rule 2: Email must look like a real email
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "Enter a valid email address.";
    message.style.color = "red";
    return;
  }

  // Rule 3: Password must be 6+ characters
  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Rule 4: Passwords must match
  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  // If everything is correct
  message.textContent = "Form submitted successfully!";
  message.style.color = "green";

  // Reset form and greeting
  form.reset();
  greeting.textContent = "";
});
