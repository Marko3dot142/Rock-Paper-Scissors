/**document.getElementById('rock').onclick = function () {
  const randomNumber = Math.random ();
  if (randomNumber <= 0.3333) {
    alert('You picked rock. Computer picked scissors. You win.');
  } else if (randomNumber > 0.3333 && randomNumber<= 0.6666) {
    alert(`You picked rock. Computer picked rock. It's a tie.`);
  } else {
    alert('You picked rock. Computer picked paper. You lose.');
  }
};

document.getElementById('paper').onclick = function () {
  const randomNumber = Math.random ();
  if (randomNumber <= 0.3333) {
    alert('You picked paper. Computer picked rock. You win.');
  } else if (randomNumber > 0.3333 && randomNumber<= 0.6666) {
    alert(`You picked paper. Computer picked paper. It's a tie.`);
  } else {
    alert('You picked paper. Computer picked scissors. You lose.');
  }
};

document.getElementById('scissors').onclick = function () {
  const randomNumber = Math.random ();
  if (randomNumber <= 0.3333) {
    alert('You picked scissors. Computer picked paper. You win.');
  } else if (randomNumber > 0.3333 && randomNumber<= 0.6666) {
    alert(`You picked scissors. Computer picked scissors. It's a tie.`);
  } else {
    alert('You picked scissors. Computer picked rock. You lose.');
  }
}; */

/**Math.random will let computer choose n >= 0 or <1. */
/**Here, we evenly divided the range of n into three parts that are fit with 3 possibilities of the game.*/
/**We can divide the range to the number of part base on situation (if 4 outcomes, then 0-0.25, 0.25-0.5...) */
/** &&: Stands for "and", use to declare two outcomes as one condition. */
/** && (Logical AND): Evaluates to true only if **both** conditions are true. */
/** ||: Stands for "or", use to declare either one outcome as one condition.*/
/** || (Logical OR): Evaluates to true if **at least one** condition is true.*/


/**More tidy code for rps by using function. */

let computerMove = ''; /**Variable: computerMove need to be defined first. Cannot create inside the function because any variables in the scope only exist in the scope.*/

function pickComputerMove() {
  
  const randomNumber = Math.random ();   /**Step 1: Generate a new random number*/

  if (randomNumber < 1/3) {
      computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber <2/3) {
      computerMove = 'paper';
  } else {
      computerMove = 'scissors';
  };

  return 'rock';
}

document.getElementById('rock').onclick = function () {

  console.log(pickComputerMove());

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

  pickComputerMove();
  
  let result = ''; /**Step 3: Determine the result based on player's choice */
  
  
    if (computerMove === 'paper') {    /**Cannot use = here because we're not assigning value here, we just checking whether it is equals to. */
      result = `It's a tie`;
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
    alert(`You picked paper. Computer picked ${computerMove}. ${result}`); /**Step 4: Display the result */
};

document.getElementById('scissors').onclick = function () {

  pickComputerMove();
  
  let result = ''; /**Step 3: Determine the result based on player's choice */
  
  
    if (computerMove === 'scissors') {    /**Cannot use = here because we're not assigning value here, we just checking whether it is equals to. */
      result = `It's a tie`;
    } else if (computerMove === 'rock') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
    alert(`You picked scissors. Computer picked ${computerMove}. ${result}`); /**Step 4: Display the result */
  };

