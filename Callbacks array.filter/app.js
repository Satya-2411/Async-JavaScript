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


const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

const peopleWithPets = people.filter((person)=> {
    return person.hasPet
})

console.log(peopleWithPets)