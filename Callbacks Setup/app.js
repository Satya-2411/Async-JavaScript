
/*  <---------  fetch().then()  --------->

const btnEl = document.querySelector("#btn-el")

btnEl.addEventListener("click", ()=> {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(response => response.json())
        .then(data => console.log(data))
})

*/

//  <-------- Async Await -------->

const btnEl = document.querySelector("#btn-el")

async function getCards() {
    const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await response.json()
    console.log(data)
}

btnEl.addEventListener("click", getCards)
