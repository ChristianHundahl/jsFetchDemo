//https://jsonplaceholder.typicode.com/users
//Comment out block = ctrl + K + C
//Uncomment code = ctrl + K + U

document.getElementById("btn-get-all").onclick = getAllUsers

function getAllUsers() {
    console.log("Called getAllUsers")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const rows = data.map(u => `
      <tr>
        <td>${u.name} </td>
        <td>${u.phone} </td>
        <td>${u.address.street} </td>
        <td>${u.address.city} </td>
      </tr>
      `).join("\n")
        document.getElementById("table-body").innerHTML = rows;
      })
      .catch(err => console.error("UPPPPPS: " + err))
      .finally(e => console.log("Done with getAllUsers"))
  }
  

document.getElementById("btn-get").onclick = getUser
function getUser() {
    console.log("Called getUser")
    const id = document.getElementById("input-id").value
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then(res => {
        if (!res.ok) {
          return Promise.reject("Error :" + "Could not fetch user")
        }
        return res.json()
      })
      .then(data => {
        document.getElementById("id-name").innerText = data.name
        document.getElementById("id-phone").innerText = data.phone
        document.getElementById("id-street").innerText = data.address.street
        document.getElementById("id-city").innerText = data.address.city
      })
      .catch(err => {
        document.getElementById("error").innerText = err
      })
      .finally(e => console.log("Done with getUser"))
}

//Construct POST-request in .js:
// const options = {
//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json",
//         "Accept" : "application/json"
//     },
//     body : JSON.stringify(
//         {
//             name : "Eric"
//         }
//     )
// }
// fetch("https://jsonplaceholder.typicode.com/users",options)
//   .then(res => res.json())
//   .then(data => console.log(data))




