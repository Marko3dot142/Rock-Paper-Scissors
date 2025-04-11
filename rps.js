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


let score = {
  wins: 0,
  ties: 0,
  losses: 0
};

/*Use let to create a group of properties that can be change later*/
/*wins: 0, ties: 0, losses: 0 means there're compartments that holds the number 0.*/
/*Metaphor: I'm creating a scoreboard start from zero*/


const storedScore = localStorage.getItem('score');

/*Create another variable (storedScore) that use to store value that remain constant without further action.*/
/*localStorage.getItem('score') means what is the value I want to store. Here, is the accumulated result
from playing the game that its mechanics have defined below.*/


if (storedScore) {
  score = JSON.parse(storedScore); // Convert string back to object
}

/*Use conditional check, if (storedScore), to let the computer know, o
only do the next part if we actually got something from storage (not null).*/
/*Here, score is equal to accumulated score. It is like telling computer 
“Hey, instead of starting at all 0s, let’s use the last saved numbers.” */
/*To conclude, overwrite the original score with the stored version.*/
/*The score is string. We must convert back to usable object using JSON.parse.*/


document.getElementById('rock').addEventListener('click', function() {
  playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
  playGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
  playGame('scissors');
});

/*onclick tells what happens when clicked — only one thing.*/
/*addEventListener listens for clicks — and lets me do more, or different things, when it's clicked.*/ 

document.getElementById('resetscore').onclick = function() {
  score.wins = 0;
  score.ties = 0;
  score.losses = 0;

localStorage.removeItem('score');

/*Include the same localStorage commander in the resetscore button's scope, like here.*/
/*The same localStorage commander can be used multiple time, depends on where we want to include this command
that make sense to our project.*/

  alert("Scores have been reset to 0!");
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

/**Use objects function to store the score.*/

/**- What it’s mean by playGame(playerMove)? 
This is like saying, "Hey, computer, I picked my toy!" 
The word inside the parentheses tells the computer which toy (or move) you picked.

-	What it’s mean by const computerMove = pickComputerMove();
This is like asking, "Okay, computer, please choose your toy!" 
The computer then picks one at random (rock, paper, or scissors) and saves it as its move.

- Why the probability declaration (math.random) should place at the bottom?
Imagine you have a big box of crayons. You use one crayon every time you want to draw a picture. 
Now, think of Math.random() like picking a crayon from that box at random.

When we write our game code, we like to keep the really important parts at the top so we can see them easily. 
The part that picks a random crayon (or in our game, a random move) is a little helper. We put this helper down at 
the bottom so that our main story—the game where you choose rock, paper, or scissors—looks neat and tidy.

It doesn't mean that the crayon picker (the Math.random() part) isn't important; it just means we like to organize 
our code like a neat toy room. All the parts of our game work together, but the main action is up top 
and the little helper is at the bottom.*/


  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = `It's a tie.`;
    }

  } else if (playerMove === 'paper') {
     if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = `It's a tie.`;
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }

  } else if (playerMove === 'rock') {
     if (computerMove === 'rock') {
      result = `It's a tie.`;
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

    if (result === 'You win.') {
      score.wins += 1;     //Indicate how the score counts. 
    } else if (result === `It's a tie.`) {
      score.ties += 1;
    } else {
      score.losses += 1;
    }
  

  localStorage.setItem('score', JSON.stringify(score));

  /*'result' is a string name we give for this storage process as we will use it to access the data later.*/
  /*localStorage only support string, hence, we convert the variable 'result' to string using JSON.stringify.*/


  alert(`You picked scissors. Computer picked ${computerMove}. ${result}
  Wins: ${score.wins}; Ties: ${score.ties}; Losses: ${score.losses}`); /**Step 4: Display the result and the accumulated results.*/
  };


  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
  
    return computerMove;
  }
