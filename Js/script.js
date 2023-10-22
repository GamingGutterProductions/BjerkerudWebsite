// script.js

// Function to validate login and signup forms
function validateForm(form) {
    const username = form.username.value;
    const password = form.password.value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
