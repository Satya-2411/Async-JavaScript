let deckId

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
            console.log(data)
        })
}

document.querySelector("#btn-el").addEventListener('click', handleClick)

const myElement = document.getElementById("cards")
function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // document.getElementById("cards").innerHTML = `
            //     <img src="${data.cards[0].image}">
            //     <img src="${data.cards[1].image}">
            // `
            myElement.children[0].innerHTML = `<img src="${data.cards[0].image}" class="card">`
            myElement.children[1].innerHTML = `<img src="${data.cards[1].image}" class="card">`
        })
}

document.getElementById("draw-el").addEventListener('click', drawCards)