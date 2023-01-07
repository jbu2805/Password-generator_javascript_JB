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



//Generate a password when the button is clicked
//Present a series of prompts for password criteria
//Length of password At least 10 characters but no more than 64.
//Character types Lowercase Uppercase Numeric Special characters ($@%&*, etc)
//Code should validate for each input and at least one character type should be selected
//Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

//get random index value
var randomIndex=Math.floor(Math.random()*arr.length);

//get random item
var item = arr[randomIndex];
return item;
}

//concatenate all arrays in one
var array = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);

//view all characters that could be used to create a password in an array
console.log(array);

//call function
getRandom(array); 


//create variable to store randomly selected character from the array

var result = getRandom(array);
console.log(result);



// Function to generate password with user input
function generatePassword() {
var result_length_min=10;
var result_length_max=65;
uppercase===true ? str_user=str[0] :0;
lowercase===true ? str_user+=str[1] :0;
numbers===true ? str_user+=str[2] :0;
symbols===true ? str_user+=str[3] :0;
if(str_user){
  let len_str =  str_user.length;
  var v= Math.floor(Math.random() * str_user.length);
  var password = str_user[v];
  for (let i = 0 ; i<len ; i++ )
  { 
    v= Math.floor(Math.random() * str_user.length);
    console.log(v);
    password += str_user[v];
  }
  console.log(password);
  document.getElementById("password").value =password;
}else{
 
  alert('Minmum check mark 1 option for generation password');
}



}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);