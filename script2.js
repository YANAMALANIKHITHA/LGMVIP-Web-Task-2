// Retrieve registration form and registration data container
const registrationForm = document.getElementById('registration-form');
const registrationData = document.getElementById('registration-data');

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();
  
  // Retrieve form input values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  
  // Create registration data
  const registrationInfo = document.createElement('div');
  registrationInfo.innerHTML = `
    <h2>Registration Details:</h2>
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
    <p><strong>Password:</strong> ${passwordInput.value}</p>
  `;
  
  // Clear form input values
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
  
  // Append registration data to container
  registrationData.appendChild(registrationInfo);
}

// Event listener for form submission
registrationForm.addEventListener('submit', handleFormSubmission);









const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");
selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});
items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");
            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerText = "Select Language";
            }
    });
})