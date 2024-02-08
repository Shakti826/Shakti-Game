let userScore = 0 ;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result")
const userPara = document.querySelector("#user-score")
const compPara = document.querySelector("#comp-score")


const genCompChoice = () =>{
   const option = ["rock","paper","scissors"]
   const randIdx = Math.floor(Math.random() *3)
   return option[randIdx]
};


const showWinner = (userWin) =>{
    if(userWin){
        userScore++
        userPara.innerText = userScore
       console.log("user win the match")
       result.innerText = "You won the Match"
       result.style.backgroundColor = "green"
    }else{
        compScore++
        compPara.innerText = compScore
        console.log("computer win")
        result.innerText = "You lose the game"
        result.style.backgroundColor = "red"
    }
};


const gameDraw = () =>{
   console.log("game was draw")
   result.innerText = "Game Draw!"
   result.style.backgroundColor = "black"
   result.style.color = "white"
};

const game = (userChoice) =>{
   const compChoice = genCompChoice()
   console.log('computer choice',compChoice)

   if(userChoice === compChoice){
      gameDraw()
   }else{
    let userWin = true
    if(userChoice === "rock"){
       userWin =  compChoice === "paper"?false :true
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true
    }else{
        userWin = compChoice === "rock" ? false :true
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) =>{
   choice.addEventListener("click", () =>{
      const userChoice = choice.getAttribute("id")
      console.log("user choice",userChoice)
      game(userChoice)
   });
});