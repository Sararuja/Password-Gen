document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  if (!(lowercase || uppercase || numeric || special)) {
    alert("Please select at least one character type.");
    return;
  }

  var password = generateRandomPassword(length, { lowercase, uppercase, numeric, special });
  document.getElementById("password").value = password;
}

function generateRandomPassword(length, options) {
  var charset = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+";

  if (options.lowercase) {
    charset += lowercaseChars;
  }

  if (options.uppercase) {
    charset += uppercaseChars;
  }

  if (options.numeric) {
    charset += numericChars;
  }

  if (options.special) {
    charset += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}