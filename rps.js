const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Incorrect Input');
    }
    };
    
    const getComputerChoice = () => {
    const rndNumber = Math.floor(Math.random() * 3);
    
      switch (rndNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
      }
    const determineWinner = (userChoice, computerChoice) =>{
      if (userChoice === computerChoice){
        return ('Tie');
      }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer win!';
      } else {
        return 'You win!';
      }
    }
      if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer win!';
      } else {
        return 'You win!';
      }
    }
      
      if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer win!';
      } else {
        return 'You win!';
          } 
        }
     if (userChoice === 'bomb') {
    return 'You win! (con trampa)';
          }  
    }
    
    const playGame = () =>{
      const userChoice = getUserChoice('paper');
      const computerChoice = getComputerChoice('');
      console.log("You throw: "  + userChoice);
      console.log("The computer throw: " + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    }
    playGame()
    
    