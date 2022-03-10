// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Enter the desired length of your password. Must be between 8 and 128 characters.");
var lengthVerify = false;
passwordLength = parseInt(passwordLength);
while (!lengthVerify) {
  if (!(8 <= passwordLength <= 128)) {
    lengthVerify = true;
  } else {
    passwordLength = prompt("Invalid input. Please enter a number between 8 and 128.")
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
