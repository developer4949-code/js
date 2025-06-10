const name="debi"
const repoCount=9

// console.log(name + " "+repoCount)

console.log(`hello I am ${name} with ${repoCount} repositories`)

const gameName=new String("supermario")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.charAt(5))
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('m'))

const newString=gameName.substring(0,9)

console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)
//if negative is apploed on slice then it will start from reverse

const newStringOne="   debi   "
console.log(newStringOne)
console.log(newStringOne.trim())
//trim()  will remove the extra space from both from start and end
// only works with whitespace characters and there is trim_start and trim_end is slso there 

const url="hhtps://www.kau%20paradeep.com"

console.log(url.replace('%20',' '))

console.log(url.includes('ka'))

const myname ="debi prasad das"
console.log(myname.split(' '))