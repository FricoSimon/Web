const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Make API call to the backend
    fetch('http://localhost:3000/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        // You can add authentication headers or other data here if needed
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data from the backend
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the API call
        console.error('Error:', error);
    });
});