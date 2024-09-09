//Implémenter le JS de ma page
//Déclaration des Variables
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaireInscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", InscrireUtilisateur);

//Fonction permettant de valider tous le formulaire
function validateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const mailOk = validateMail(inputMail);
  const passwordOk = validatePassword(inputPassword);
  const passwordConfirmOk = validateConfirmationPassword(
    inputPassword,
    inputValidatePassword
  );

  if (nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {
    btnValidation.disabled = false;
  } else {
    btnValidation.disabled = true;
  }
}

function validateConfirmationPassword(inputPwd, inputConfirmPwd) {
  if (inputPwd.value == inputConfirmPwd.value) {
    inputConfirmPwd.classList.add("is-valid");
    inputConfirmPwd.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPwd.classList.remove("is-valid");
    inputConfirmPwd.classList.add("is-invalid");
    return false;
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


function InscrireUtilisateur(){

  let dataForm = new FormData(formInscription);

  let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
    "firstName": dataForm.get("nom"),
    "lastName": dataForm.get("prenom"),
    "email": dataForm.get("email"),
    "password": dataForm.get("mdp")
});

let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("http://127.0.0.1:8000/api/registration", requestOptions)
.then(response => {
  if(response.ok){
    return response.json();
  } else {
     alert("Erreur lors de l'inscription");
  }
})
  .then((result) => {
    alert("Bravo "+dataForm.get("prenom")+", vous êtes maintenant inscrit, vous pouvez vous connecter.");
    document.location.href="/signin";
  })
  .catch((error) => console.error(error));
}