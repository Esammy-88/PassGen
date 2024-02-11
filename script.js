// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to generate password based on user input
function generatePassword() {
  var length = parseInt(document.getElementById('length').value);
  var includeUppercase = document.getElementById('uppercase').checked;
  var includeLowercase = document.getElementById('lowercase').checked;
  var includeNumbers = document.getElementById('numbers').checked;
  var includeSpecialCharacters = document.getElementById('symbols').checked;

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8 and 128 for password length.");
    return "";
  }

  // Create array to store types of characters to include in password
  var characterPool = [];

  if (includeUppercase) {
    characterPool = characterPool.concat(upperCasedCharacters);
  }

  if (includeLowercase) {
    characterPool = characterPool.concat(lowerCasedCharacters);
  }

  if (includeNumbers) {
    characterPool = characterPool.concat(numericCharacters);
  }

  if (includeSpecialCharacters) {
    characterPool = characterPool.concat(specialCharacters);
  }

  // Check if at least one character type is selected
  if (characterPool.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById('password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
