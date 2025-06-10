//singleton


//object literals
const mysym=Symbol("key1")

const jsuser={
    name:"debiprasad das",
    age:20,
    location:"Bhubaneswar",
    [mysym]:"hello_key",//syntax for symbol
    "prefer_place":"Miami"
}

console.log(jsuser.location)
console.log(jsuser[mysym])
console.log(jsuser["prefer_place"])//syntax to retrieve string key name

console.log("hello guys")

jsuser.name="Subham Das"
console.log(jsuser)

//Object.freeze(jsuser)//after this no changes will propagate 

jsuser.greeting= function()
{
    console.log(`hello js user , ${this.name}`)
}
console.log(jsuser.greeting())