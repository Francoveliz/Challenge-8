const formId = document.getElementById("form-id");
const emailInput = document.getElementById("email-input");
const alert = document.getElementById("alert");

emailInput.addEventListener("invalid", function(event) {
  event.preventDefault();

  if (!event.target.validity.valid) {
    if (emailInput.value === "") {
      alert.textContent = "Whoops! It looks like you forgot to add your email";
      alert.className = "error";
      alert.style.display = "block";
      emailInput.style.borderColor = "hsl(354, 100%, 66%)";
      emailInput.style.marginBottom = "3.5rem";

    } else {
      alert.textContent = "Please provide a valid email address";
      alert.className = "error";
      alert.style.display = "block";
      emailInput.style.borderColor = "hsl(354, 100%, 66%)";
      emailInput.style.marginBottom = "3.5rem";
    }
  }
});

emailInput.addEventListener("input", function(event) {
  if ("block" === alert.style.display) {
    input.className = "";
    alert.style.display = "none";
    emailInput.style.marginBottom = "1rem";
  }
})
