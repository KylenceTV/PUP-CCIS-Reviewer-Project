const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        errorMessage.textContent = 'Please fill in all fields.';
    } else {
        window.location.href = '../HTML/HOME.html';
      }
});
