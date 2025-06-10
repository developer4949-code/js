let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toTimeString())
console.log(mydate.toLocaleString())

console.log(typeof mydate)

let mycreateddate=new Date(2025,5,10,5,1)

console.log(mycreateddate.toLocaleString())

let mydateone=new Date("10-01-2025")
console.log(mydateone.toLocaleDateString())

let mytimestamp=Date.now()

console.log(mytimestamp)
console.log(mydateone.getTime())

console.log(Math.floor(Date.now()/1000))
//if you need time in seconds ,by default the time is in milli seconds
