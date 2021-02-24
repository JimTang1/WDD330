fetch('https://swapi.dev/api/people/')
    .then(result => result.json())
    .then(jsonResult =>{
        let jsonForm = document.querySelector(".jsonForm");

        //show count
        jsonForm.innerHTML += `<h2>There are ${jsonResult.count} people</h2>`

        jsonResult.results.forEach(
            person=>{
                jsonForm.innerHTML += `<div>${person.name}</div>`
            }
        )
    })