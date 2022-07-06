window.onload = getEmployees()

async function getEmployees() {
    const request = await fetch("/employees", {
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          "token": localStorage.token
        }
    })

    console.log(await request.json())
}