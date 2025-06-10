const score =89
console.log(score)

const newScore=new Number(100)

console.log(newScore)

console.log(newScore.toString())

console.log(newScore.toFixed(2))

const otherNumber=143.567

console.log(otherNumber.toPrecision(2))
// it set the number of significant digit in the rounding off principle


const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))
//by default this is us standard but now this is indian standard


//+++++++++++++++++MATHS++++++++++++++++++++

console.log(Math.abs(-1456))

console.log(Math.round(4.75))
console.log(Math.ceil(4.59))
console.log(Math.floor(4.89))

console.log(Math.random())

console.log(Math.round(Math.random()*100+1))

const min=10
const max=30

console.log(Math.floor(Math.random()*(max-min+1)+min))