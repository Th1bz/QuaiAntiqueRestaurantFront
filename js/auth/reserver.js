const inputDate = document.getElementById("dateInput");
const inputNbConvives = document.getElementById("NbConvivesInput");
const btnValidationResa = document.getElementById("btn-validation-reservation");

inputDate.addEventListener("click", validateForm);
inputNbConvives.addEventListener("click", validateForm);

//Fonction permettant de valider tous le formulaire
function validateForm() {
  const dateOk = validateRequired(inputDate);
  const NbConvivesOk = validateRequired(inputNbConvives);

  if (dateOk && NbConvivesOk) {
    btnValidationResa.disabled = false;
  } else {
    btnValidationResa.disabled = true;
  }
}

//Fonction pour valider les champs : Date et Nb Convives
function validateRequired(input) {
  if (input.value != "") {
    //C'est OK
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    //C'est pas OK
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

console.log("hello");
