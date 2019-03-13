var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();

document.onkeyup = function (event) {
    var guess = event.key;
    if (guess === letterToGuess) {
        win();
        alert("You've guess correctly! You're psychic!")
    } else if (guessesLeft - 1 === 0) {
        lost();
    } else {
        if (!guessedLetters.includes(guess)) {
            fail(guess);
        }

    }

    display();
}


function display() {
    var winsP = document.getElementById("wins");
    var losesP = document.getElementById("loses");
    var guessLeft = document.getElementById("guessLeft");
    var letterGuessed = document.getElementById("guessed");
    winsP.innerHTML = wins;
    losesP.innerHTML = loses;
    guessLeft.innerHTML = guessesLeft;
    letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
    wins++;
    resetGame();
}

function lost() {
    loses++;
    resetGame();
    alert("You lost :( womp womp")
}

function fail(letter) {
    guessesLeft--;
    guessedLetters.push(letter);
}

function resetGame() {
    guessesLeft = 10;
    guessedLetters = [];
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("The letter I'm thinking of is: " + letterToGuess);
}