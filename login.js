var obj = {
  user: []
}

let emailText = document.getElementById('email')
let loginText = document.getElementById('login')
let passwordText = document.getElementById('password')
let errorText = document.getElementsByClassName('error')


document.getElementById("login-button").addEventListener("click", function (event) {
  event.preventDefault()

  if(loginText.value.length == 0) {
    document.getElementById("errorLogin").innerHTML = "Введите логин!"
    document.getElementById("errorPassword").innerHTML = ""
    document.getElementById("error").innerHTML = ""

  } else if (passwordText.value.length == 0) {
    document.getElementById("errorPassword").innerHTML = "Введите пароль!"
    document.getElementById("errorLogin").innerHTML = ""
    document.getElementById("error").innerHTML = ""

  } else if (loginText.value.length == 0 && passwordText.value.length == 0) {
    document.getElementById("error").innerHTML = "Введите данные!"
    document.getElementById("errorLogin").innerHTML = ""
    document.getElementById("error").innerHTML = ""
  } else {
    let data = localStorage.getItem('users')
    obj = JSON.parse(data);
    obj.user.find((f) => {
      (f.login == loginText.value && f.password == passwordText.value) ? (
        localStorage.setItem('currenUser', loginText.value),
        window.open('weather.html', '_self')

      ) : console.log('object')
    })

}})

window.onload = function () {
  document.body.classList.add('loaded_hiding')
  window.setTimeout(function () {
    document.body.classList.add('loaded')
    document.body.classList.remove('loaded_hiding')
  }, 500);
}