// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates password from user input criteria
function generatePassword(pwLength, hasLower, hasUpper, hasSpecial, hasNums) {
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = lower.toUpperCase();
  let symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let numbers = "1234567890";
  let criteria = ""
  if (hasLower) {
    criteria.concat("l");
  } else if (hasUpper) {
    criteria.concat("u");
  } else if (hasSpecial) {
    criteria.concat("s");
  } else if (hasNums) {
    criteria.concat("n");
  }

  for (i = 0; i < pwLength; i++) {
    let type = criteria[length%criteria.length]
  }
}

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Enter the desired length of your password. Must be between 8 and 128.");
  var lengthVerify = false;
  passwordLength = parseInt(passwordLength);

  while (!lengthVerify) {
    if (8 <= passwordLength && passwordLength <= 128) {
      lengthVerify = true;
    } else {
      passwordLength = prompt("Invalid input. Please enter a number between 8 and 128.")
    }
  }
  var criteriaVerify = false;

  var includeLower = confirm("Include lowercase?");
  while (!criteriaVerify) {
    var includeUpper = confirm("Include uppercase?");
    var includeSymbol = confirm("Include special characters?");
    var includeNumbers = confirm("Include numbers?");
    if (includeLower || includeUpper || includeSymbol || includeNumbers) {
      criteriaVerify = true;
    } else {
      includeLower = confirm("Need at least 1 criteria. Include lowercase?")
    }
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
