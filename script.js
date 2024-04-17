const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passwordValidation = document.getElementById("password-confirm");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const submitButton = document.getElementById("submit");
const emailInput = document.getElementById("email");

//create a script that validates that the input password is equal to the confirm password

function checkInputs() {
  const items = form.querySelectorAll(".item");

  for (const item of items) {
    if (item.value === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
