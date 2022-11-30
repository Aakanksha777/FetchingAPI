const foxResult = document.querySelector("#fox_result");
const dogResult = document.querySelector("#dog_result");
const foxBtn = document.querySelector("#fox_btn");
const dogBtn = document.querySelector("#dog_btn");


foxBtn.addEventListener("click", getRandomFox) // Random cats on click

function getRandomFox () {
    console.log("getting random cat")
    fetch ("https://randomfox.ca/floof/") // fetching URL 
        .then(res => res.json()) // JSON FORMAT
        .then(data => {
            foxResult.innerHTML = `<img src="${data.image}"/>`
        })
}

dogBtn.addEventListener("click", getRandomDog)

function getRandomDog () {
    console.log("random dog here")
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img src="${data.url}"/>` 
        })
}