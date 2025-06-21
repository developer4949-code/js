const coding=["c++","javascript","Ruby","Python"]
coding.forEach(function(item)
{
    console.log(item)
})

coding.forEach((item)=>
{
    console.log(item)
})

function printme(item)
{
    console.log(item)
}

coding.forEach(printme)

const mycoding=[
    {
        "lname":"java",
        "fname":"java"
    },
    {
        "lname":"javascript",
        "fname":"js"
    },
    {
        "lname":"python",
        "fname":"py"
    }
]

mycoding.forEach(printme)