// Assignment Code
var generateBtn = document.querySelector("#generate");

// character variables: used to set the characters to use in the password gen.
var valueL = [
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
var valueNum = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];
var valueU = [
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
var valueS = [
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

// measures array lengths
console.log(valueL.length + " lower length");
console.log(valueU.length + " upper length");
console.log(valueNum.length + " number length");
console.log(valueS.length + " special length");

// checks first value
console.log(valueL[0]);

// randomly selects one string from it's assigned array
console.log(Math.floor(Math.random() * valueL.length)+ " lower random");
console.log(Math.floor(Math.random() * valueU.length)+ " upper random");
console.log(Math.floor(Math.random() * valueNum.length)+ " number random");
console.log(Math.floor(Math.random() * valueS.length)+ " special random");

// sets character amount boundries
// const is a read only variable assigned a value and cannot be reassigned hence 'Const'ant.
const minNumber = 8;
const maxNumber = 128;

// starts prompt asking for a character limit, 
// then starts a series of confirm boxes to determine which arrays will be included
function confirmClick() {
var complexity = prompt("How many characters do you want in your password?", "Please choose between 8 and 128")
if (complexity < minNumber || complexity > maxNumber){
 alert("Password must be at least 8 characters and under 128 characters.")
}
if (isNaN(complexity) === true) {
 alert("Password must be a number between 8 and 128")
}
else{
var lC = confirm("Do you want lowercase characters in your password?")
var uC = confirm("Do you want uppercase characters in your password?")
var nC = confirm("Do you want number characters in your password?")
var sC = confirm("Do you want special characters in your password?")
var arraySelect;
  if (lC == true && uC == false && nC == false && sC == false){
    arraySelect = valueL
  }
  if (lC == true && uC == true && nC == false && sC == false){
    arraySelect = valueL + valueU
  }
  if (lC == true && uC == true && nC == true && sC == false){
    arraySelect = valueL + valueU + valueNum
  }
  if (lC == true && uC == true && nC == true && sC == false){
    arraySelect = valueL
  }
}
  
}


  var passCode = "";

  console.log(passCode);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      
  passwordText.value = password;

}






// return statement 



  // var lC = confirm("Do you want lowercase characters in your password?")
  // if (lC == true) {
  //   var uC = confirm("Do you want uppercase characters in your password?")
  //   if (uC == true) {
  //     var nC = confirm("Do you want number characters in your password?")
  //     if (nC == true) {
  //       var sC = confirm("Do you want special characters in your password?")
  //       if (sC == true) {
  //         //make password with all character types here
        
  //       }
  //     } 
  //   }
  // }









// sets variable combining all character variables
// var allCharacters = valueL.concat(valueU,valueNum,valueS);






// function getPasswordOptions() {
//   var length = parseInt(prompt("How many characters do you want in your password?"))
//    if(length < 8) {alert("sorry, password must be at least 8 characters.")}
//    if(length > 128) {alert("Sorry, password must be under 128 characters.")}
//    if(ifNaN(length) === true) {alert("Must Enter a number between 8 and 128.")}
//   }
// getPasswordOption()

