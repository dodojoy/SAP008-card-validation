import validator from './validator.js';
const submit = document.querySelector("#send");
submit.addEventListener("click", function(e) {
  e.preventDefault();
  const number = document.querySelector("#input-card-number");
  const value = number.value;
  const listValue = value.split("");
  const numberListValue = listValue.map(function(number) {
    return parseInt(number);
  });
  const reverseList = numberListValue.reverse();
  function isEven(index) {
    if (index % 2 === 0) {
      return true;
    } 
  };
  const doubleNumber = reverseList.map(function(number) {
    if (isEven(reverseList.indexOf(number)) === true) {
      return number * 2;
    } else {
      return number;
    }
  });
  console.log("list ao contrario em dobro", doubleNumber);
});

console.log(validator);