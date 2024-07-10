let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComChoice = () =>{
     
    const options = ["Rock", "Paper", "Scissor"];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const drawGame = () =>{
    msg.innerText = "Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
       
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "rgb(183, 27, 27)";
    }
}
const playGame = (userChoice) => {
    console.log("user's choice =", userChoice);

    //Generate computer's choice
    const compChoice = genComChoice();
    console.log("computer's Choice =", compChoice);

    if(userChoice === compChoice){
          drawGame();
    } 
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = (compChoice === "Paper"? false : true);
        }
        else if(userChoice === "Paper"){
            userWin = (compChoice === "Rock"? true : false);
        }
        else{
            userWin = (compChoice === "Rock"? false : true);
        }
        
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=> {
       const userChoice = choice.getAttribute("id"); 
       playGame(userChoice);
    });
});


//To reset the game to initial position

const resetbtn = document.querySelector("#reset");

const resetGame = () =>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;

    msg.innerText = "Play Your Move!";
    msg.style.backgroundColor = "#081b31";
}

resetbtn.addEventListener("click", resetGame);