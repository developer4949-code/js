const user={
    name:"debi prasad ",
    price:2339,
    welcomeMessage:function ()
    {
        console.log(`${this.name}, Welcome to the website`)
    }
}
user.welcomeMessage()

console.log(this)
//this only can used inside objects not inside fucntions

const chai= () => {
    const username="hello"
    console.log(this.username)
    console.log(this)

}
chai()

const addthree=(num1,num2,num3)=>{

    return num1+num2+num3
}

const addthreenew=(num1,num2)=>num1+num2
console.log(addthree(1,2,3))
console.log(addthreenew(4,5))