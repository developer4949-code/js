const arr=[2,3,4,5,6,80]
console.log(arr[5])
//shallow copy means one refrence

const arr2=new Array(1,2,3)
console.log(arr2)

//array methods

arr2.push(12)
console.log(arr2)

arr2.pop()
console.log(arr2)

arr2.unshift(90)
console.log(arr2)

arr2.shift()
console.log(arr2)

console.log(arr2.indexOf(2))
console.log(arr2.includes(24))

const newarr=arr2.join()
console.log(newarr)

const arr3=[0,1,2,3,4,5,6,7,8]
console.log("A",arr3)

const myn1=arr3.slice(1,3)
console.log(myn1)
console.log("B",arr3)

const myn2=arr3.splice(1,3)
console.log(myn2)
console.log("C",arr3)

//the main difference between slice and splice is in one case original array is manipulated and in another case the original array is not minipulated

