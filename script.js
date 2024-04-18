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

  if (items[2].value != "") {
    checkEmailInput();
  }

  items[2].addEventListener("keyup", () => {
    checkEmailInput();
  });

  if (items[4].value != "") {
    checkPasswordMatch();
  }

  items[4].addEventListener("keyup", () => {
    checkPasswordMatch();
  });
}

function checkEmailInput() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const emailErrorText = document.querySelector(".email-error");

  if (!emailInput.value.match(emailRegex)) {
    emailInput.classList.add("error");
    emailInput.parentElement.classList.add("error");

    if (emailInput.value != "") {
      emailErrorText.innerText = "Please enter a valid email";
    } else {
      emailErrorText.innerText = "Email can't be empty";
    }
  } else {
    emailInput.classList.remove("error");
    emailInput.parentElement.classList.remove("error");
  }
}

function checkPasswordMatch() {
  const pwdErrorText = document.querySelector(".confirm-error");

  if (passwordValidation.value !== passwordInput.value) {
    passwordValidation.classList.add("error");
    passwordValidation.parentElement.classList.add("error");

    if (passwordValidation.value !== "") {
      pwdErrorText.innerText = "Passwords don't match";
    } else {
      pwdErrorText.innerText = "Confirmation can't be empty";
    }
  } else {
    passwordValidation.classList.remove("error");
    passwordValidation.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !nameInput.classList.contains("error") &&
    !emailInput.classList.contains("error") &&
    !lastNameInput.classList.contains("error") &&
    !passwordInput.classList.contains("error") &&
    !passwordValidation.classList.contains("error")
  ) {
    Swal.fire({
      title: "Good job!",
      text: "Your account is created!",
      icon: "success",
    });
    form.reset();
    return false;
  }
});
