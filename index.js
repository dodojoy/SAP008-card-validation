import validator from './validator.js';
const submit = document.querySelector("#send");
submit.addEventListener("click", function(e) {
  e.preventDefault();
  const number = document.querySelector("#input-card-number");
  const value = number.value;
  console.log(validator.cardValidator(value));
  console.log(validator.maskify(value));
});
