// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericChars = ['0','1','2','3','4','5','6','7','8','9'];
var lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function passwordOptions(){
  var length = prompt("How long would you like your password?")
  if(length < 8) {
    alert("Password must be at least 8 characters");
    return;  
  }
  if(length > 128) {
    alert("Password must be at under 129 characters");
    return;  
  }
  var hasSpecial = confirm('Click ok if you want special character');
  var hasNumeric = confirm('Click ok if you want numeric chararcters');
  var hasLower = confirm('Click ok if you want lowercase characters');
  var hasUpper = confirm('Click ok if you want uppercase characters');
  if(!hasSpecial && !hasNumeric  && !hasLower && !hasUpper){
    alert("You must select one of the choices")
    return;
  }
  var passObj = {
    passLength: length,
    special: hasSpecial,
    numeric: hasNumeric,
    lower: hasLower,
    upper: hasUpper
  }
  console.log(passObj)
  return passObj;

}

function generatePassword(){
  var options = passwordOptions();
  var finalPassword = []
  var possibleChars = []
  var guarenteedChars = []
  //?Check if they chose certain characters to be added to the password
  if(options.special) {
    possibleChars = possibleChars.concat(specialChars)
    guarenteedChars.push(randomize(specialChars))
  }
  if(options.numeric) {
    possibleChars = possibleChars.concat(numericChars)
    guarenteedChars.push(randomize(numericChars))
  }
  if(options.lower) {
    possibleChars = possibleChars.concat(lowerChars)
    guarenteedChars.push(randomize(lowerChars))
  }
  if(options.upper) {
    possibleChars = possibleChars.concat(upperChars)
    guarenteedChars.push(randomize(upperChars))
  }

  //?Add guarenteed character to the final passwords
  finalPassword = finalPassword.concat(guarenteedChars)

  for(var i = 0; i < options.passLength - guarenteedChars.length; i++){
    finalPassword.push(randomize(possibleChars))
  }

  finalPassword = finalPassword.join('') 
  console.log(finalPassword)
  return finalPassword;


}

function randomize(array){
  var index = Math.floor(Math.random() * array.length);
  return array[index] 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// TODO: Create the generatePassword function that returns the final password and all of my code should live inside this unction

// TODO: Create a prompt to ask the length of the password and save it to a VAR

// TODO: Create a Confirm to ask the user if they want lowercase char

// TODO: Create a Confirm to ask the user if they want uppercase char

// TODO: Create a Confirm to ask the user if they want numbers 

// TODO: Create a Confirm to ask the user if they want special char


// TODO: After I'm done with the prompts I have to Create the password

// TODO: Create arrys with all needed char (an array for lowercase char, one for uppercase char etc)

// TODO: create a new var that holds all the chosen char

// TODO: create a Conditional situation that saves the choisen char from our confirms to our chosen char var (using an if statement)

// TODO: We have to select the specific number of char randomly from our final collection based on the user's answer to how long they want the length of their pass to be
 
// TODO: create an array to hold the final results

// I can use Math.floor(Math.random()) to get a random number
// for loop that runs as long as the prompt to the lenght answer [ for(var i=0 ; i<"charactor length prompt" ; i++ ){"logic goes here"}]

// TODO:  inside the forloop, push each char into the final char var

// TODO: Add validations to make sure atleast one type of char is selected and alert the user if there are no types being selected

// TODO: Add validation to the length to make sure it is between 8-128 char
