//Implémenter le JS de ma page
//Déclaration des Variables
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

//Fonction permettant de valider tous le formulaire
function validateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);

  if (nomOk && prenomOk && mailOk && passwordOk) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

//Fonction pour valider le MDP
function validatePassword(input) {
  //Définir mon regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    //Password OK
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    //Password pas OK
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Fonction pour valider l'Email
function validateMail(input) {
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    //Mail OK
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    //Mail pas OK
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Fonction pour valider les champs : Nom et Prénom
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
