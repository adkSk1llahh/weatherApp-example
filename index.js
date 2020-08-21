var obj = {
  user: []
};

var localObj = {
  user: []
};

document.getElementById("register-button").addEventListener("click", function (event) {
  event.preventDefault()

  let emailText = document.getElementById('email')
  let loginText = document.getElementById('login')
  let passwordText = document.getElementById('password')
  //let errorText = document.getElementsByClassName('error')


  if (emailText.value.length == 0) {
    document.getElementById("errorEmail").innerHTML = "Введите email!"
    document.getElementById("errorLogin").innerHTML = ""
    document.getElementById("errorPassword").innerHTML = ""
    document.getElementById("error").innerHTML = ""

  } else if (loginText.value.length == 0) {
    document.getElementById("errorLogin").innerHTML = "Введите логин!"
    document.getElementById("errorEmail").innerHTML = ""
    document.getElementById("errorPassword").innerHTML = ""
    document.getElementById("error").innerHTML = ""

  } else if (passwordText.value.length == 0) {
    document.getElementById("errorPassword").innerHTML = "Введите пароль!"
    document.getElementById("errorEmail").innerHTML = ""
    document.getElementById("errorLogin").innerHTML = ""
    document.getElementById("error").innerHTML = ""

  }else if(passwordText.value.length < 8){
    document.getElementById("errorPassword").innerHTML = "Пароль не менее 8 символов"
    document.getElementById("errorEmail").innerHTML = ""
    document.getElementById("errorLogin").innerHTML = ""
    document.getElementById("error").innerHTML = ""

  } else if (emailText.value.length == 0 && loginText.value.length == 0 && passwordText.value.length == 0) {
    document.getElementById("error").innerHTML = "Введите данные!"


  } else {
    obj.user.push({
      email: emailText.value,
      login: loginText.value,
      password: passwordText.value,
      currentCity: 0,
    });
    var json = JSON.stringify(obj)
    let data = localStorage.getItem('users')
    localObj = JSON.parse(data)
    if (localObj != null) {
      localObj.user.find((f) => {
        if (f.login == loginText.value) {
          document.getElementById("error").innerHTML = "Данные введены неверно!"
        } else {
          localStorage.setItem('users', json)
          localStorage.setItem('currenUser', loginText.value)
          window.open('login.html', '_self')
        }
      })
    } else {
      localStorage.setItem('users', json)
      localStorage.setItem('currenUser', loginText.value)
      window.open('login.html', '_self')
    }

  }
})

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}