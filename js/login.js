const btnSingIn = document.getElementById("sing-in");
      btnSingUp = document.getElementById("sing-up");
      formRegister = document.querySelector(".register");
      formLogin = document.querySelector(".login");

btnSingUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
}) 
btnSingIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
}) 