// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordId = document.querySelector("#password");

// character variables: used to set the characters to use in the password gen.
const valueL = [
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
const valueNum = [
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
const valueU = [
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
const valueS = [
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


const randomFunc = {
  lC: RandomL,
  uC: RandomU,
  nC: RandomNum,
  sC: RandomS
};

// constrains the password length.
const minNumber = 8;
const maxNumber = 128;

// runs the prompts and confirms to input the information needed to generate desired password string.
generateBtn.addEventListener('click', function()  {

  var complexity = prompt("How many characters do you want in your password?", "Please choose between 8 and 128");  
  if (complexity < minNumber || complexity > maxNumber){
   alert("Password must be at least 8 characters and under 128 characters.")
   return;
  }
  if (isNaN(complexity) === true) {
   alert("Password must be a number between 8 and 128.")
  }
  else{
    // variables set.
    var length = parseInt(complexity);
    var lC = confirm("Do you want lowercase characters in your password?")
    var uC = confirm("Do you want uppercase characters in your password?")
    var nC = confirm("Do you want number characters in your password?")
    var sC = confirm("Do you want special characters in your password?")

    // logs if the above booleans are true or false and measures the length.
    console.log(lC,uC,nC,sC);
    console.log(length);

    // readies the function to enter in the password into the html document.
    passwordId.textContent = generatePassword(lC,uC,nC,sC,length);
    }

  // Generate password function.
  function generatePassword (lC, uC, nC, sC, length){
    let generatedPassword = "";

    // simply counts the total values read.
    const valueCount = lC + uC + nC + sC;
    console.log('valueCount: ', valueCount);

    // Sets a new arrow function referring to valuesArr as a 'this' and reads only true variables. 'item' Referring to any array it reads.
    const valuesArr = [{ lC }, { uC }, { nC }, { sC }].filter(item => Object.values(item)[0]);

    console.log('valuesArr: ', valuesArr);
    
    // Checks if all arrays are false, if so, returns stops the function.
    if(valueCount === 0) {
      return '';
    }

    // Reads each type of array based on the promted length variable
    for(let i = 0; i < length; i += valueCount) {
      valuesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        console.log('funcName: ', funcName);

    // Appends the 'for' function to 'generatedPassword' string
        generatedPassword += randomFunc[funcName]();
      });
    }
    // Logs generate password, with .slice it will cut off the types by the length of complexity.
    console.log(generatedPassword.slice(0, length));

    // Sets a variable pooling the entire function to allow the string to be cut off at the length chosen
    var passwordText = generatedPassword.slice(0, length);

    // Sends the information up to the top of the function to run.
    return passwordText;
  }



})



// Value(L,U,Num,S) are my arrays.
// Generator functions.
function RandomL(){
  return valueL[Math.floor(Math.random() * valueL.length)];
}
function RandomU(){
  return valueU[Math.floor(Math.random() * valueU.length)];
}
function RandomNum(){
  return valueNum[Math.floor(Math.random() * valueNum.length)];
}
function RandomS(){
  return valueS[Math.floor(Math.random() * valueS.length)];
}






// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      
  passwordText.value = password;

}