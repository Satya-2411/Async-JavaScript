const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

const filterArray = function(people, callback) {
    const resultingArray = [];
    for(let i=0; i<people.length; i++) {
        if(callback(people[i])) {
            resultingArray.push(people[i])
        }
    }
    return resultingArray
}

function callback(people) {
    return people.hasPet
}

console.log(filterArray(people, callback))