//Wait for the DOM to finish loading before running the game
//Get button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    //for (let i=0; i < buttons.length; i++){ equals the following for loop:
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }



})

// next very useful /**  creates a pop-up on hover displaying info contained whithin whever the fuction is called !!
/**
 * The main game "loop", called when the game is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //Creates 2 random nums between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}