const nameInput = document.getElementById('name-input');
const submitButton = document.getElementById('submit-button');

// Listen for changes in the text of the input box
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
});

// Listening for submit button click events
submitButton.addEventListener('click', () => {

    const name = nameInput.value.trim();

    localStorage.setItem('username', name);

    window.location.href = 'index.html';
});