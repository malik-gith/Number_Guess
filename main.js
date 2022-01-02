/* Variables Kinds
String
Number
Array => Object (based on Java Script)
Object
Bollean
*/

let number = Math.ceil(Math.random() * 10);
let userNumber = document.querySelector("[name='number']");
let submit = document.querySelector('.submit');
let result = document.querySelector('.result');
let i = 4;

submit.addEventListener('click', function () {
       playAgain();
       if (
              userNumber.value != '' &&
              userNumber.value <= 10 &&
              userNumber.value >= 1
       ) {
              if (userNumber.value == number) {
                     correctAnswer();
              } else {
                     unCorrectAnswer();
              }
       } else {
              result.innerHTML = 'Please enter a number between 1 and 10';
              result.style.color = 'red';
       }
});

function correctAnswer() {
       result.style.color = '#05976b';
       result.innerHTML = `${userNumber.value}  was the correct number! YOU WIN`;
       submit.innerHTML = 'play Again';
       userNumber.style.setProperty('border', '1px solid #05976b', 'important');
       userNumber.value = number;
       userNumber.setAttribute('disabled', 'true');
}

function unCorrectAnswer() {
       i--;
       result.innerHTML = `${userNumber.value} is wrong. you have ${i} triel`;
       result.style.color = 'red';
       userNumber.value = '';
       if (i == 0) {
              submit.innerHTML = 'play Again';
              result.innerHTML = `Game Over. YOU LOSE! The correct number was ${number}`;
              userNumber.style.setProperty(
                     'border',
                     '1px solid red',
                     'important'
              );
              userNumber.setAttribute('disabled', 'true');
       }
}

function playAgain() {
       if (submit.innerHTML == 'play Again') {
              window.location.reload();
       }
}
