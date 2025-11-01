const btnEl = document.querySelector("#btn-el")

async function getCards() {
    const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await response.json()
    console.log(data)
}

btnEl.addEventListener("click", getCards)

setTimeout(()=> {
    console.log(`I finally ran!`)
}, 2000)