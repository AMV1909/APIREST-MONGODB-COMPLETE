function check_email() {
  var email = document.getElementById("email").value
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

  if(expReg.test(email)) {
    login()
  }else {
    document.getElementById("response").innerHTML = "Ingrese un email válido"
    document.querySelector("#email_field").style.border = "2px solid red"
    document.querySelector("#email_field span").style.background = "red"
  }
}

async function login() {
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value

  const request = await fetch("/employees/login?email="+email+"&password="+password, {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
  })

  const response = await request.text();

  if(response != "FAIL") {
    localStorage.token = response;
    localStorage.email = email;
    window.location.replace("Functions.html")
  }else {
    document.getElementById("response").innerHTML = "Email y/o Contraseña Incorrectos"
  }
}