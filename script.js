// Function to handle form submission
function submit() {
    event.preventDefault();
    const formData = handleGetFormData();
    const warning = document.getElementById("warning");

    if (validateFormData(formData)==false) {
        displayErrorMessage("Periksa form anda sekali lagi.")
    } else {
        clearErrorMessage("");
        console.log(formData);
    }
}

document.getElementById('submit-form').addEventListener('click', submit());

// Function to get form data
function handleGetFormData() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const email = document.getElementById("email").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status").checked;

    return {
        name,
        city,
        email,
        zipCode,
        status
    };
}

// Function to check if a string contains only numbers
function isNumber(str) {
    return !isNaN(str);
}

// Function to check if the checkbox is checked
function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

// Function to validate form data
function validateFormData(formData) {
    return (
        formData !== null &&
        isNumber(formData.zipCode) &&
        checkboxIsChecked()
    );
}
