function playGame(userChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = '';
    
    if (userChoice === computerChoice) {
      result = "Empate!";
    } else if ((userChoice === 'pedra' && computerChoice === 'tesoura') ||
               (userChoice === 'paper' && computerChoice === 'pedra') ||
               (userChoice === 'tesoura' && computerChoice === 'papel')) {
      result = "Você venceu!";
    } else {
      result = "Você perdeu!";
    }
    
    document.getElementById('result').innerHTML = `Você escolheu ${userChoice}. O computador escolheu ${computerChoice}. ${result}`;
  }
  