// Assignment Code
var generateBtn = document.querySelector("#generate");
//create an array or a string of uppercase, lowercase, numeric, and special characters

function generatePassword(){
  var specialChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperChars= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var passlength=prompt("what is the length of the password?")
if (passlength<8||passlength>128){
  alert("passlength needs to be between 8 and 128")
  return;
}
var hasUpperCase=confirm("do you want uppercase letters in the password?")
var hasLowerCase=confirm("do you want lower case letters in the password?")
var hasNumeric=confirm("do you want numbers in the password?")
var hasSpecial=confirm("do you want special characters in the password?")
console.log(hasUpperCase,hasLowerCase,hasNumeric,hasSpecial)
//if statement to use or not use different character types 
var userCharacters=[]
if (hasUpperCase===true){
  userCharacters=userCharacters.concat(upperChars)
}
if (hasLowerCase===true){
  userCharacters=userCharacters.concat(lowerChars)
}
if (hasNumeric===true){
  userCharacters=userCharacters.concat(numericChars)
}
if (hasSpecial===true){
  userCharacters=userCharacters.concat(specialChars)
}
//make a four loop and randomization function to then create the passwords using the characters
console.log(userCharacters)
var password="" 
  for(var i=0;i<passlength;i++){
    var number =Math.floor(Math.random() * userCharacters.length)
password=password+userCharacters[number]
  }
return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
