const buttonPaper = document.getElementById('button-paper'),
  buttonRock = document.getElementById('button-rock'),
  buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function () {
  buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier');
});
buttonScissors.addEventListener('click', function () {
  buttonClicked('nożyce');
});

// Describe this function ...

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  //  Describe this function...

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage(
        'Nie znam ruchu o id ' +
          argMoveId +
          '. Zakładam, że chodziło o "kamień".'
      );
      return 'kamień';
    }
  }

  // Describe this function...

  function displayResult(argPlayerMove, argComputerMove) {
    console.log(
      'wywołano funkcję displayResults z argumentami: ' +
        argPlayerMove +
        ', ' +
        argComputerMove
    );
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamien' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == computerMove) {
      printMessage('Remis');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  const playerMove = argButtonName;
  console.log('ruch gracza to :' + argButtonName);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
