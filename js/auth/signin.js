const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const signinBtn = document.getElementById("btnSignin");

signinBtn.addEventListener("click", checkCredentials);

function checkCredentials() {
  //Ici, il faudra appelé l'API pour vérifier les crédentials en BDD

  if (
    mailInput.value == "Aziz@xn--lumire-6ua.com" &&
    passwordInput.value == "Aziz-Lumière1"
  ) {
    //Il faudra récupérer le vrai token
    const token =
      "qwluhqiocvbmldsqkfjnvqgdhjddsbsbpoikgqolgnkjbmqorghniuvbrqpuhbytqhvcbvru";
    setToken(token);
    //Placer ce token en cookie

    setCookie(RoleCookieName, "admin", 7);
    window.location.replace("/");
  } else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}
