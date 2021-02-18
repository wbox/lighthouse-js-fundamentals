/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mrs. Sparr"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
var weapon = "";
var solved = false;

const roomArray = ['ballroom', 'gallery', 'billiards room', 'dining room'];
const suspectArray = ['Mr. Kalehoff', 'Ms. Van Cleve', 'Mrs. Sparr', 'Mr. Parkes'];

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/

const whoIsIt = (room,suspect) => {
  if (room === 'ballroom' && suspect === 'Mr. Kalehoff') {
    weapon = 'poison';
    solved = true;
  } else if (room === 'gallery' && suspect === 'Ms. Van Cleve') {
    weapon = 'trophy';
    solved = true;
  } else if (room === 'billiards room' && suspect === 'Mrs. Sparr') {
    weapon = 'pool stick';
    solved = true;
  } else if (room === 'dining room' && suspect === 'Mr. Parkes') {
    weapon = 'knife';
    solved = true;
  } else {
    solved = false; //console.log(`Room ${room} or ${suspect} doesn't exist`);
  }

  /* ****************************************** */
  // The code below will run only when `solved` is true
  if (solved) {
    return suspect + " did it in the " + room + " with the " + weapon;
  } else {
    //return suspect + " doesn't belong to " + room + " and " + weapon;
    return null;
  }
}
//console.log(room + " " + suspect);
console.log(whoIsIt(room,suspect));

/*
for ( r = 0; r < roomArray.length; r++) {
  for ( s = 0; s < suspectArray.length; s++) {
    who = whoIsIt(roomArray[r],suspectArray[s]);
    if ( who ) {
      console.log(who);
    }
  }
}
*/

/* ****************************************** */