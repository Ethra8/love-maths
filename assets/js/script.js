//Wait for the DOM to finish loading before running the game
//Get button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    //for (let i=0; i < buttons.length; i++){ equals the following for loop:
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

runGame("addition");

})

// next very useful /**  creates a pop-up on hover displaying info contained whithin whever the fuction is called !!
/**
 * The main game "loop", called when the game is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //Creates 2 random nums between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`; //throw JS  keyword stops game from running and print to console whatever ERROR message is between ``
    }
}

/**
 * Checks the user answer against the 1st element in the returned
 * calculateCorrectAnswer() array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value); //value instead of .innerText, as input type is set to type=number
    let calculatedAnswer = calculateCorrectAnswer(); //function returns an array [result , "next game type"]
    let isCorrect = userAnswer === calculatedAnswer[0]; //index 0 of array is result (1st parameter of array), will return TRUE or FALSE

    if (isCorrect) { //short way of saying if isCorrect == true
        alert("Hey, You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwwwww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]); //index 1 of array is the same game type, which is the default next game type 
}   

/**
 * Gets the operands (numbers) and the operator (plus, minus, etc)
 * directly from the DOM, and returns correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText); //parseInt returns integer, instead of default string. Can't make operations from string, but CAN from integers (numbers)
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"]; //returns result of operand1 + operand2, and predetermines the next game: addition
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Gets the current score from the DOM, and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText); // also .textContent
    document.getElementById('score').innerText = ++oldScore;// also oldScore + 1 -> putting the ++ incrementse by 1, but after the variable doesn't let user see increment, putting ++ before the variable, shows the increment to the user
}

/**
 * Gets the current tally of incorrect answers from the DOM, and increments it by 1
 */
function incrementWrongAnswer() {
    
    let oldScore = parseInt(document.getElementById('incorrect').innerText); // also .textContent
    document.getElementById('incorrect').innerText = ++oldScore;// also oldScore + 1 -> putting the ++ incrementse by 1, but after the variable doesn't let user see increment, putting ++ before the variable, shows the increment to the user

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}