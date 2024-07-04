const accountId = 144553
let accountEmail = "sakshi@gmail.com"
var accountPassword = "12345"
accountCity = "Gwalior"
let accountState;
// accountId = 2 //not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "as@kh.com" 
accountPassword = "12345563"
accountCity = "Delhi"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])