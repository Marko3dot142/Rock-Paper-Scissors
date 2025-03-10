document.getElementById('rock').onclick = function () {

  const randomNumber = Math.random ();   /**Step 1: Generate a new random number*/

  let computerMove = ''; /**Step 2: Determine computer's move */

  if (randomNumber < 1/3) {
  computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber <2/3) {
  computerMove = 'paper';
  } else {
  computerMove = 'scissors';
  };

  let result = ''; /**Step 3: Determine the result based on player's choice */


  if (computerMove === 'rock') {    /**Cannot use = here because we're not assigning value here, we just checking whether it is equals to. */
    result = `It's a tie`;
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else {
    result = 'You win.';
  }
  alert(`You picked rock. Computer picked ${computerMove}. ${result}`); /**Step 4: Display the result */
};

document.getElementById('paper').onclick = function () {

  const randomNumber = Math.random ();   /**Step 1: Generate a new random number*/
  
  let computerMove = ''; /**Step 2: Determine computer's move */
  
  if (randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber <2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  };
  
  let result = ''; /**Step 3: Determine the result based on player's choice */
  
  
    if (computerMove === 'paper') {    /**Cannot use = here because we're not assigning value here, we just checking whether it is equals to. */
      result = `It's a tie`;
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
    alert(`You picked rock. Computer picked ${computerMove}. ${result}`); /**Step 4: Display the result */
};

document.getElementById('scissors').onclick = function () {

  const randomNumber = Math.random ();   /**Step 1: Generate a new random number*/
  
  let computerMove = ''; /**Step 2: Determine computer's move */
  
  if (randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber <2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  };
  
  let result = ''; /**Step 3: Determine the result based on player's choice */
  
  
    if (computerMove === 'scissors') {    /**Cannot use = here because we're not assigning value here, we just checking whether it is equals to. */
      result = `It's a tie`;
    } else if (computerMove === 'rock') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
    alert(`You picked rock. Computer picked ${computerMove}. ${result}`); /**Step 4: Display the result */
  };

