const accountId=143143
let accountEmail="debi@gmail.com"
var accountState="karnataka"
accountCity="jaipore"
let accountStatus;

//accountId=2 not allowed

accountEmail="dp@gmail.com"
accountState="odisha"
accountCity="BBSR"

/*

dont use var because there is 
block scope issue along with functional scope issue
use let and const 
*/

console.table([accountEmail,accountId,accountState,accountStatus,accountCity])