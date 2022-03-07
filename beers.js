document.getElementById("btn-get-all").onclick = getBeers

window.onload = (getBeers) //Calls funciton when window loaded

function getBeers() {
    console.log("Called getBeers")
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
      .then(data => {
        console.log(data)
        const rows = data.map(beer => `
      <tr>
        <td>${beer.name} </td>
        <td>${beer.tagline} </td>
        <td>${beer.abv} </td>
        <td>${beer.ibu} </td>
      </tr>
      `).join("\n")
        document.getElementById("table-body").innerHTML = rows;
      })
      .catch(err => console.error("UPPPPPS: " + err))
      .finally(e => console.log("Done with getBeers"))
}

document.getElementById("abv-btn").onclick = getBeersAbv
function getBeersAbv() {
    const abv = document.getElementById("input-abv").value//Value input by user
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => {
        if (!res.ok) {
          return Promise.reject("Error :" + "incorrect abv value entered")
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        const rows = data.filter(function(beer) {return beer.abv > abv}).map(beer => `
      <tr>
        <td>${beer.name} </td>
        <td>${beer.tagline} </td>
        <td>${beer.abv} </td>
        <td>${beer.ibu} </td>
      </tr>
      `).join("\n")
        document.getElementById("table-body").innerHTML = rows;
      })
      .catch(err => {
        document.getElementById("error").innerText = err
      })
      .finally(e => console.log("Done with getBeersAbv"))
}