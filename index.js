import validator from './validator.js';
const submit = document.querySelector("#send");
submit.addEventListener("click", function(e) {
  e.preventDefault();
  const number = document.querySelector("#input-card-number");
  const value = number.value;
  const numberValue = Number(value);
  if (value === ""){
    alert("Campo vazio")
  } else if (isNaN(numberValue)) {
    alert("Digite somente números")
  } else if (!validator.isValid(value)) {
    alert("Cartão inválido")
  } else {
    alert("Cartão " + validator.maskify(value) + " validado")
  }
});