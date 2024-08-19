let userScore= 0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw! play again";
    msg.style.backgroundColor="#081b31";
    

}
const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
       console.log("you win!");
       msg.innerText=`you win! your ${userChoice} beat ${compChoice}`;
      msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you lose!");
       
        msg.innerText=`you loose! ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const genComChoice=()=>{
    const options =["stone","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame= (userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice = genComChoice();
    console.log("comp choice =",compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
    
        if (userChoice === "stone") {
            userWin = compChoice === "scissor";
        } else if (userChoice === "paper") {
            userWin = compChoice === "stone";
        } else if (userChoice === "scissor") {
            userWin = compChoice === "paper";
        }
    
        showWinner(userWin, userChoice, compChoice);
    }
        //another way
//     if(userChoice === compChoice){
//         drawGame();
//     }else{
//         let userWin = true;
//         if(userChoice==="stone"){
//             userWin  =compChoice ==="scissor"? false: true ;
//         }else if(userChoice ==="paper"){
//             userWin  =compChoice ==="stone"? false: true ;
//         }else{
//             userWin  =compChoice ==="stone"? false: true ;
//         }
//         showWinner(userWin ,userChoice,compChoice);
//     }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("img was clicked",userChoice);
        playGame(userChoice);
    })
})