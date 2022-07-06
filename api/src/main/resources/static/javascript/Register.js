async function check_form() {
    var email = document.getElementById("email").value
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    var password = document.getElementById("password").value
    var conf_password = document.getElementById("confirm_password").value

    if(expReg.test(email)) {
        if(password == conf_password) {
            document.querySelector("p").innerHTML = ""
            document.querySelector(".a").style.border = "none"
            document.querySelector(".c").style.border = "none"
            document.querySelector(".b").style.background = "#2691d9"
            document.querySelector(".d").style.background = "#2691d9"

            var data = {}
            data.name = document.getElementById("name").value
            data.lastname = document.getElementById("lastname").value
            data.document = document.getElementById("document").value
            data.phone = document.getElementById("phone").value
            data.email = email
            data.password = password

            const request = await fetch("/employees", {
                method: 'POST',
                headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            document.querySelector("p").innerHTML = "Registro Exitoso"
            setTimeout(function() {
                window.location.replace("Login.html")
            }, 3000)
        }else {
            document.querySelector("#email_field").style.border = "none"
            document.querySelector("#email_field span").style.background = "#2691d9"

            document.querySelector("p").innerHTML = "Las contraseñas deben ser iguales"
            document.querySelector(".a").style.border = "2px solid red"
            document.querySelector(".c").style.border = "2px solid red"
            document.querySelector(".b").style.background = "red"
            document.querySelector(".d").style.background = "red"
        }
    }else {
        document.querySelector("p").innerHTML = "Ingrese un email válido"
        document.querySelector("#email_field").style.border = "2px solid red"
        document.querySelector("#email_field span").style.background = "red"
    }
}