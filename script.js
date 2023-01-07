// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var length;
var lowercase;
var uppercase;
var special;
var numeric;


//Generate a password when the button is clicked
//Present a series of prompts for password criteria
//Length of password At least 10 characters but no more than 64.
//Character types Lowercase Uppercase Numeric Special characters ($@%&*, etc)
//Code should validate for each input and at least one character type should be selected
//Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Function to prompt user for password options
function getPasswordOptions() {

  length = prompt("Enter a password length");
  if (length <10 || length > 64)
  alert("Length pf the password must be between 10 and 64")

  else{
    lowercase = confirm("Do you want to include lower case characters?");
    // console.log(lowercasecharacter);
    uppercase = confirm("Do you want to include upper case characters?");
    special = confirm("Do you want to include special characters?");
    numeric = confirm("Do you want to include numbers?");
  }
  }
  
getPasswordOptions();

// Function for getting a random element from an array
// Function for getting a random element from an array
function getRandom(arr) {
  //get random index value
  return Math.floor(Math.random() * ((arr.length-1) - 1 + 1)) + 1;
}


//concatenate all arrays in one
var array = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
//view all characters that could be used to create a password in an array
console.log(array);
//call function
getRandom(array);

// Function to generate password with user input

function generatePassword(length) {
  var password = ""
  if(lowercase == true || uppercase == true || special == true || numeric == true)
  {
    for(var i = 0; i < length;)
    {
      var typeChoice = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      if (typeChoice == 1 && lowercase == true)
      {
        password += lowerCasedCharacters[getRandom(lowerCasedCharacters)]
        i++
      }
      if (typeChoice == 2 && uppercase == true)
      {
        password += upperCasedCharacters[getRandom(upperCasedCharacters)]
      i++
      }
      if (typeChoice == 3 && special == true)
      {
        password += specialCharacters[getRandom(specialCharacters)]
      i++
      }
      if (typeChoice == 4 && numeric == true)
      {
        password += numericCharacters[getRandom(numericCharacters)]
       i++
      }
    }
    return password;
  }
  else{
    alert("At least one option must be selected")
  }

}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword()   
{if (length <10 || length > 64)
  
  alert("Length of the password must be between 10 and 64");

else {
  var password = generatePassword(length);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

