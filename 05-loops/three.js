//for-of

const greetings="hello world!"
for (const greet of greetings) {
   // console.log(`character is ${greet}`)
}

//Maps :-> unique and ordered 

const map=new Map()
map.set("Kau","kaushik")
map.set("chitakata","diptesh")

// console.log(map)

for (const [key,value] of map) {
    console.log(key ,":-", value)
}

//for of loop doesn't work with objects

const obj={
    "game1":"Spyderman",
    "game2":"GTA-5"
}
//forin loop is used
for (const key in obj) {
    
        const element = obj[key];
        console.log( key, element)
         
   
}