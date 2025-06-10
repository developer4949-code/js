const regularUser={
    email:"hello@deepseek.com",
    fullname:{
        userfullname:{
            firstname:"krunal ",
            lastname:"pandya"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname)

//object merge
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const finalobj=Object.assign(obj1,obj2)

//anothe way of object merge
const fobj={...obj1,...obj2}
console.log(finalobj)
console.log(fobj)

console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))

const course={
    name:"js",
    courseInstructor:"Hitesh",
    Age:"Age pf ultron"
}
const {courseInstructor:instructor}=course
console.log(instructor)

// {
//     "name":"debi prasad das",
//     "id":"b123048",
//     "gpa":"9.09"
// }

// [
//     {},
//     {},
//     {},
//     {}
// ]