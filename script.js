const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPwd");
const errorMessage = document.querySelector(".errorMessage");
const inputs = document.querySelectorAll("input[type=text]");

function matchPasswords() {
  if (password.value == confirmPassword.value) {
    //validate the field and get rid of password messaeg
    password.style.cssText = "border: 2px solid green; ";
    confirmPassword.style.cssText = " border: 2px solid green; ";
    errorMessage.textContent = "";
  } else {
    password.style.cssText =
      "outline: none; box-shadow: 2px 2px 5px black; border: 2px solid red;";
    confirmPassword.style.cssText =
      "outline: none; box-shadow: 2px 2px 5px black; border: 2px solid red;";
    errorMessage.textContent = "* Passwords do not match";
  }
}


password.addEventListener("input", matchPasswords);
confirmPassword.addEventListener("input", matchPasswords);

inputs.forEach(function(elem) {
    elem.addEventListener("input", function() {
        elem.classList.add("postInput");
    });
});