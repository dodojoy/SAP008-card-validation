import validator from './validator.js';
const submit = document.querySelector("#send");
submit.addEventListener("click", function(e) {
  e.preventDefault();
  const numero = document.querySelector("#input-card-number");
  const value = numero.value;
  console.log(value);
});

console.log(validator);