// const a=10
// let b=20
// var c=30

//{} scope

if(true)
{
    const a=10
    let b=20
    var c=30//it does not have block scope so just avoid to use this one 
}

// console.log(a)
// console.log(b)
console.log(c)

// Global scope is available for block scope but Block scope is not available for Global scope */

function one()
{
    const username="debiprasad"
    function two()
    {
        const website="google"
        console.log(username)
    }
    //console.log(website)
    two()


}
one()


addone(5)
function addone(num)
{
 return num+1
}

addtwo(5)//can not call before declaration
const addtwo=function(num)
{
    return num+2
}