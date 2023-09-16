// Get references to the form and its elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('do-login');

// Add a login event listener
loginButton.addEventListener('click', function () {
  // Get the entered username and password
  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  // Check if the username and password are correct
  if (enteredUsername === 'admin' && enteredPassword === 'admin') {
    // Redirect to the index page (you can replace 'dashboard.html' with your actual index page URL)
    window.location.href = 'dashboard.html';
  } else {
    // Display an error message or handle invalid login here
    alert('Invalid username or password. Please try again.');
  }
});
