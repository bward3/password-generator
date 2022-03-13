// Assignment Code
var generateBtn = document.querySelector("#generate");

// Shuffle function used to randomize password order
String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

// Generates password from user input criteria
function generatePassword(pwLength, hasLower, hasUpper, hasSpecial, hasNums) {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = lower.toUpperCase();
  var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numbers = "1234567890";
  var criteria = '';
  var password = '';
  if (hasLower) {
    criteria = criteria.concat('l');
  } if (hasUpper) {
    criteria = criteria.concat('u');
  } if (hasSpecial) {
    criteria = criteria.concat('s');
  } if (hasNums) {
    criteria = criteria.concat('n');
  }
  
  // Loop the desired length of pwd
  // Distributes character types as evenly as possible
  for (i = 0; i < pwLength; i++) {
    var type = criteria[i%criteria.length];
    var char = '';
    var index;
    switch (type) {
      case "l":
        index = Math.floor(Math.random() * lower.length);
        char = lower[index];
        break;
      case "u":
        index = Math.floor(Math.random() * upper.length);
        char = upper[index];
        break;
      case "s":
        index = Math.floor(Math.random() * symbols.length);
        char = symbols[index];
        break;
      case "n":
        index = Math.floor(Math.random() * numbers.length);
        char = numbers[index];
        break;
    }
    password = password.concat(char);
    
  }
  // Loop has given password a pattern based on character type,
  // so randomize order to make it more secure
  return password.shuffle();
}


// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Enter the desired length of your password. Must be between 8 and 128.");
  var lengthVerify = false;
  passwordLength = parseInt(passwordLength);

  // Make sure user input is valid
  // Get length
  while (!lengthVerify) {
    if (8 <= passwordLength && passwordLength <= 128) {
      lengthVerify = true;
    } else {
      passwordLength = prompt("Invalid input. Please enter a number between 8 and 128.")
    }
  }
  var criteriaVerify = false;

  // Make sure user input is valid
  // Get pwd criteria
  var includeLower = confirm("Include lowercase?");
  while (!criteriaVerify) {
    var includeUpper = confirm("Include uppercase?");
    var includeSpecial = confirm("Include special characters?");
    var includeNumbers = confirm("Include numbers?");
    if (includeLower || includeUpper || includeSpecial || includeNumbers) {
      criteriaVerify = true;
    } else {
      includeLower = confirm("Need at least 1 criteria. Include lowercase?")
    }
  }
  var password = generatePassword(passwordLength,includeLower,includeUpper,includeSpecial,includeNumbers);
  var passwordText = document.querySelector("#password");
  console.log(password);

  // Set html passwordText to the generated pwd
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
