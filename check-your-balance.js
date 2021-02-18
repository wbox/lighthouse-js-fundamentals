/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance) {
  if (isActive && balance > 0) {
    console.log(`Your balance is \$${balance.toFixed(2)}.`);
  } else if (isActive && balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
  } else if (isActive && balance === 0) {
    console.log("Your account is empty.");
  } else {
    console.log("Your account is no longer active.");
  }
} else {
  console.log("Thank you. Have a nice day!");
}