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
  length = prompt("Enter a length");
  lowercase = confirm("Include lower case?");
  uppercase = confirm("Include upper case?");
  special = confirm("Include special character?");
  numeric = confirm("Include numbers?")
}

// Function for getting a random element from an array
// Function for getting a random element from an array
function getRandom(arr) {
  //get random index value
  var randomIndex=Math.floor(Math.random()*arr.length);
  return randomIndex;
  }

  //concatenate all arrays in one
var array = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
//view all characters that could be used to create a password in an array
console.log(array);
//call function
getRandom(array); 
 
  
  //create variable to store randomly selected character from the array
  result = getRandom(array);
  entity1=getRandom(specialCharacters);
  entity2=getRandom(numericCharacters);
  entity3=getRandom(lowerCasedCharacters);
  entity4=getRandom(upperCasedCharacters);
  console.log(result);
  console.log(entity1);  


// Function to generate password with user input
// Function to generate password with user input

function password_generator( len) {
  
  var password = "";
  var character = "";

  while( password.length<length ) {
      hold = specialCharacters[entity1];
      hold = upperCasedCharacters[entity4];
      character += hold;
      character += numericCharacters[entity2];
      character += lowerCasedCharacters[entity3];
      password = character;
  }
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password.substr(0,len);
}

console.log( password_generator() );


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  password = password_generator(length);
  passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

