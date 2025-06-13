const accountID = 14434
let accountName = "Dhruv" //decleration + assignment
var accountPassword = 3706
accountCity = "Nashik" //assignment
/*
if a variable is not declared it creates a global variable
*/
let accountState; //JS me semicolon lagaye na lagaye farak nahi padta

// accountID = 2 --> this will not work
accountName = "DhruvPekhale"
accountPassword = 123456
accountCity = "Sri City"

console.table([accountID ,accountName, accountPassword, accountCity, accountState]) //prints multiple things in a single line

/*
Prefer not to use var 
because of issue in block scope and functional scope

we will use let most of the times to declare variables
*/