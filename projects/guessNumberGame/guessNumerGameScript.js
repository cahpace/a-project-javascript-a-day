const inputGuess = document.querySelector("#guessInput");
const buttonGuess = document.querySelector("#guessButton");
const buttonRestart = document.querySelector("#restartButton");
const message = document.querySelector("#wrongOrRightMessage");
const guessesContainer = document.querySelector("#guessedNumbersContainer");

let randomNumber = Math.floor((Math.random() *100) +1);
console.log(randomNumber);
let counter = 1;     

function validateGuess(){
    let p = "";

    if(inputGuess.value <= 0){
        p = guessesContainer.appendChild(document.createElement("p"));
        p.textContent = `numero recisa ser maior que zero`;
        
    }else if(counter < 10){
        if(inputGuess.value > randomNumber){
            isHigh();

        } else if (inputGuess.value < randomNumber){
            isLow();
            
        } else if (inputGuess.value == randomNumber){
            youWin();
        }

    }else if(counter == 10){

        if(inputGuess.value > randomNumber){
            isHigh();
            outOfTurns();

        } else if (inputGuess.value < randomNumber){
            isLow();
            outOfTurns();
        }
    }

    inputGuess.value = "";
    inputGuess.focus();
    counter++; 
    console.log(counter);
}

function restartGame(){
    window.location.reload();
}

function youWin(){
    p = guessesContainer.appendChild(document.createElement("p"));
    p.textContent = "Congratulations! You win!";
    buttonGuess.disabled = true;
    buttonRestart.disabled = false;
}

function isLow(){
    p = guessesContainer.appendChild(document.createElement("p"));
    p.textContent = `${counter} guess: ${inputGuess.value} - too low`;
}

function isHigh(){
    p = document.createElement("p");
    p.textContent = `${counter} guess: ${inputGuess.value} - too high`;
    guessesContainer.appendChild(p);
}

function outOfTurns(){
    p = guessesContainer.appendChild(document.createElement("p"));
    p.textContent = "You are out of turns. Try again";
    buttonGuess.disabled = true;
    buttonRestart.disabled = false;
}

buttonGuess.addEventListener("click", validateGuess);
buttonRestart.addEventListener("click", restartGame);
