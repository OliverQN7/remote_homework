window.onload = function () {
  let fullName = document.getElementById("fullname");
  let username = document.getElementById("username");
  let emailAdress = document.getElementById("email");
  let password = document.getElementById("password");
  let repeatPassword = document.getElementById("repeatpassword");
  let checkBox = document.getElementById("checkbox");
  let signUpButton = document.getElementById("signup");
  let wrapper = document.getElementById("wrapper");
  let closeWrapper = document.getElementById("close");
  let fullNameLabel = document.getElementById("fullNameLabel");
  let usernameLabel = document.getElementById("usernameLabel");
  let emailLabel = document.getElementById("emailLabel");
  let passwordLabel = document.getElementById("passwordLabel");
  let repeatPasswordLabel = document.getElementById("repeatPasswordLabel");
  let checkboxLabel = document.getElementById("checkboxLabel");
  let linkLogIn = document.getElementById("link-login");
  let heading = document.getElementById("heading");
  let modalWindowButton = document.getElementById("modal-button");

  fullName.addEventListener("keydown", function (event) {
    if (!isNaN(parseInt(event.key))) {
      event.preventDefault();
    }
  });
  username.addEventListener("keydown", function (event) {
    if (event.key === "." || event.key === "," || event.key === "/") {
      event.preventDefault();
    }
  });
  checkBox.addEventListener("change", function (event) {
    if (event.target.checked) {
      console.log("Согласен");
    } else {
      console.log("Не согласен");
    }
  });
  document.getElementById("signup").onclick = function () {
    if (!fullName.value) {
      alert("Заполните имя и фамилию!");
      return;
    }
    if (!username.value) {
      alert("Заполните имя пользователя!");
      return;
    }
    if (!emailAdress.value) {
      alert("Заполните E-mail!");
      return;
    }
    if (!password.value) {
      alert("Введите пароль!");
      return;
    }
    if (!repeatPassword.value) {
      alert("Повторите пароль!");
      return;
    }
    if (password.value.length < 8) {
      alert("Пароль слишком короткий!");
      return;
    }
    if (password.value !== repeatPassword.value) {
      alert("Пароли не совпадают!");
      return;
    }
    if (!checkBox.checked) {
      alert(
        "Пожалуйста, согласитесь с нашими условиями использования и политикой конфиденциальности!"
      );
      return;
    }
    wrapper.style.display = "flex";
  };
  closeWrapper.onclick = function () {
    wrapper.style.display = "none";
  };
  linkLogIn.onclick = function (e) {
    showLogIn(e);
  };
  modalWindowButton.onclick = function (e) {
    showLogIn(e);
    wrapper.style.display = "none";
    username.value = "";
    password.value = "";
  };

  function showLogIn(e) {
    e.preventDefault();
    heading.innerText = "Log in to the system";
    fullNameLabel.style.display = "none";
    emailLabel.style.display = "none";
    repeatPasswordLabel.style.display = "none";
    checkboxLabel.style.display = "none";
    document.getElementById("changeButton").innerText = "Log In";
    linkLogIn.style.display = "none";
    signUpButton.onclick = function () {
      if (!username.value) {
        alert("Заполните имя пользователя!");
        return;
      }
      if (!password.value) {
        alert("Введите пароль!");
        return;
      }
      alert(`Добро пожаловать, ${username.value}`);
    };
  }
};

console.log("New function");
console.log("New line");
console.log("New message2");
