const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
promise.then(res => 'Satya')
    .then(data => console.log(data))

console.log(promise)