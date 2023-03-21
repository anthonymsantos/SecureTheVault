/* PSEUDOCODE
1. Create a string for the user saying: "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

2. Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator. Each must equal one of the three codes in the combination.

3. Display the message and combination on the HTML page, or in an alert popup.
*/

//Declare string variable with desired output
let vaultString = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//Declare variables + assign their values using other variables using math operators
let num1 = 5 * 2; //result 10
let num2 = num1 % 6 * num1; //result 40
let num3 = num2 - 1; //result 39

//Print the combination in an alert
alert(`${vaultString} ${num1} - ${num2} - ${num3}`);