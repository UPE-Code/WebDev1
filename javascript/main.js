const form = document.querySelector(".Contact__form");

// Inputs and Text area
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone");
const messageTextarea = document.getElementById("message");

let formValues;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = nameInput.value;
  let email = emailInput.value;
  let phoneNumber = phoneNumberInput.value;
  let message = messageTextarea.value;

  formValues = { name, email, phoneNumber, message };

  console.log(formValues);
});
