const marvel_heros=["IronMan","Thor","Captain Amaerica"]
const Indian_heros=["SRK","MSD","VIRAT"]

// marvel_heros.push(Indian_heros)
console.log(marvel_heros)

const newarr=marvel_heros.concat(Indian_heros)
console.log(newarr)

const new_heros_all=[...marvel_heros,...Indian_heros]//spread opeartor
console.log(new_heros_all)

const another_array=[1,2,3,4,[4,5,6],[5,[6,[7,[8]]]]]
console.log(another_array.flat(Infinity))

console.log(Array.isArray("debiprasad"))
console.log(Array.from("debiprasad"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))