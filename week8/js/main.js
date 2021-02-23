fetch('https://swapi.dev/api/people/')
    .then(result => result.json())
    .then(jsonResult =>{
        let main = document.querySelector("main");

        //show count
        main.innerHTML += `<h2>There are ${jsonResult.count} people</h2>`

        jsonResult.results.forEach(
            person=>{
                main.innerHTML += `<div>${person.name}</div>`
            }
        )
    })